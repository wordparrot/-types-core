export class BatchManager<BatchItem = any, BatchReturnValue = any> {
  private batchItems: BatchItem[];

  private batchSize: number;

  private stopOnError: boolean;

  private resultsArray: BatchResults[] = [];

  private startingIndex = 0;

  private defaultHandler: (batch: BatchItem) => Promise<BatchReturnValue>;

  constructor(config: BatchManagerConfig<BatchItem, BatchReturnValue>) {
    this.batchItems = config.batchItems;
    this.batchSize = config.batchSize;
    this.stopOnError = config.stopOnError;

    if (!config?.defaultHandler) {
      throw new Error("Batch Manager: default handler must be provided");
    }

    this.defaultHandler = config.defaultHandler;

    if (config.startingIndex && config?.startingIndex > 0) {
      this.startingIndex = config.startingIndex;
    }
  }

  load(moreBatchItems: BatchItem[]) {
    this.batchItems = [...this.batchItems, ...moreBatchItems];
  }

  setStartingIndex(index: number) {
    this.startingIndex = index;
  }

  async run(): Promise<BatchResults<BatchItem>> {
    if (!Array.isArray(this.batchItems)) {
      throw new Error("Batch Manager: batches are not in array format");
    }
    if (!this.batchItems.length) {
      throw new Error("Batch Manager: request length is zero");
    }
    if (this.batchSize <= 0) {
      throw new Error("Batch Manager: must provide valid batchSize");
    }

    const results = await this.execute();

    this.resultsArray.push(results);

    return results;
  }

  private async execute(): Promise<BatchResults<BatchItem>> {
    const results: BatchResults = {
      numItems: this.batchItems.length,
      totalSuccess: 0,
      totalFailed: 0,
      totalUnsent: 0,
      success: [],
      failed: [],
      unsent: [],
    };

    let shortCircuitLoop = false;

    for (
      let i = this.startingIndex;
      i < this.batchItems.length;
      i += this.batchSize
    ) {
      const remainder = this.batchItems.length - i;

      if (shortCircuitLoop) {
        const unsentBatchItems = this.batchItems.slice(i);

        results.totalUnsent += unsentBatchItems.length;

        results.unsent.push(
          unsentBatchItems.map((batchItem, batchIndex) => {
            const batchItemResponse: BatchItemResponse<BatchItem> = {
              index: i + batchIndex,
              batchItem,
              response: null,
              success: false,
            };
            return batchItemResponse;
          })
        );
      } else if (remainder > 0 && remainder <= this.batchItems.length) {
        const requests = this.batchItems.slice(i, i + this.batchSize);

        try {
          const batchResponses = await Promise.all(
            requests.map(async (batchItem, batchIndex) => {
              try {
                let response: Awaited<BatchReturnValue>;

                if (typeof batchItem === "function") {
                  response = await batchItem();
                } else {
                  response = await this.defaultHandler(batchItem);
                }

                const batchItemResponse: BatchItemResponse<BatchItem> = {
                  batchItem,
                  index: i + batchIndex,
                  response,
                  success: true,
                };

                return batchItemResponse;
              } catch (e: any) {
                const batchItemResponse: BatchItemResponse<BatchItem> = {
                  batchItem,
                  index: i + batchIndex,
                  response: e?.message || "error",
                  success: false,
                };

                return batchItemResponse;
              }
            })
          );
          const succeeded = batchResponses.filter(
            (obj) => obj.success === true
          );

          const failed = batchResponses.filter((obj) => obj.success === false);

          if (succeeded.length) {
            results.totalSuccess += succeeded.length;
            results.success.push(succeeded);
          }

          if (failed.length) {
            results.totalFailed += failed.length;
            results.failed.push(failed);
          }

          if (failed.length && this.stopOnError) {
            shortCircuitLoop = true;
          }
        } catch (e) {
          console.log(e);
        }
      }
    }

    return results;
  }

  mostRecentResult(): BatchResults<BatchItem> | null {
    if (!this.resultsArray.length) {
      return null;
    }
    return this.resultsArray[this.resultsArray.length - 1];
  }

  allResults(): BatchResults<BatchItem>[] {
    return this.resultsArray;
  }
}

export interface BatchItemResponse<BatchItem = any> {
  index: number;
  batchItem: BatchItem;
  response: any;
  success: boolean;
}

export interface BatchResults<BatchItem = any> {
  numItems: number;
  totalSuccess: number;
  totalFailed: number;
  totalUnsent: number;
  success: BatchItemResponse<BatchItem>[][];
  failed: BatchItemResponse<BatchItem>[][];
  unsent: BatchItemResponse<BatchItem>[][];
}

interface BatchManagerConfig<BatchItem, BatchItemReturnValue> {
  batchItems: BatchItem[];
  batchSize: number;
  stopOnError: boolean;
  startingIndex?: number;
  defaultHandler: (batchItem: BatchItem) => Promise<BatchItemReturnValue>;
}
