interface BatchItemResponse<BatchItem = any> {
  index: number;
  batchItem: BatchItem;
  response: any;
  success: boolean;
}

interface BatchManagerResults<BatchItem = any> {
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
  handler: (batchItem: BatchItem) => Promise<BatchItemReturnValue>;
}

class BatchManager<BatchItem = any, BatchReturnValue = any> {
  private batchItems: BatchItem[];
  private batchSize: number;
  private stopOnError: boolean;
  private resultsArray: BatchManagerResults[] = [];
  private startingIndex = 0;
  private handler: (batch: BatchItem) => Promise<BatchReturnValue>;

  constructor(config: BatchManagerConfig<BatchItem, BatchReturnValue>) {
    this.batchItems = config.batchItems;
    this.batchSize = config.batchSize;
    this.stopOnError = config.stopOnError;

    if (!config.handler) {
      throw new Error("Batch Manager: handler must be provided");
    }
    this.handler = config.handler;

    if (config.startingIndex) {
      this.startingIndex = config.startingIndex;
    }
  }

  async run(): Promise<BatchManagerResults<BatchItem>> {
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

  private async execute(): Promise<BatchManagerResults<BatchItem>> {
    const results: BatchManagerResults = {
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

        continue;
      } else if (remainder > 0 && remainder <= this.batchItems.length) {
        const requests = this.batchItems.slice(i, i + this.batchSize);

        try {
          const batchResponses = await Promise.all(
            requests.map(async (batchItem, batchIndex) => {
              try {
                const response = await this.handler(batchItem);
                const batchItemResponse: BatchItemResponse<BatchItem> = {
                  batchItem,
                  index: i + batchIndex,
                  response,
                  success: true,
                };
                return batchItemResponse;
              } catch (e) {
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
      } else {
        break;
      }
    }

    return results;
  }

  mostRecentResult(): BatchManagerResults<BatchItem> | null {
    if (!this.resultsArray.length) {
      return null;
    }
    return this.resultsArray[this.resultsArray.length - 1];
  }

  allResults(): BatchManagerResults<BatchItem>[] {
    return this.resultsArray;
  }
}

export default BatchManager;
