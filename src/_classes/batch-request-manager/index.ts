interface BatchRequestManagerResults<RequestBody = any> {
  numRequests: number;
  attempts: number;
  completed: number;
  error: number;
  resolvedData: RequestBody[];
  errorData: RequestBody[];
  unsentData: RequestBody[];
}

enum BatchRequestMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

interface BatchRequestManagerConfig<RequestBody, Options> {
  method: BatchRequestMethod;
  axios: any;
  requests: [string, RequestBody, Options][];
  chunkSize: number;
  stopOnError: boolean;
}

class BatchRequestManager<RequestBody = any, Options = any> {
  private axios;
  private method: BatchRequestMethod;
  private requests: [string, RequestBody, Options][];
  private chunkSize: number;
  private stopOnError: boolean;
  private resultsArray: BatchRequestManagerResults[];

  constructor(config: BatchRequestManagerConfig<RequestBody, Options>) {
    this.method = config.method;
    this.axios = config.axios;
    this.requests = config.requests;
    this.chunkSize = config.chunkSize;
    this.stopOnError = config.stopOnError;
  }

  async send(): Promise<BatchRequestManagerResults<RequestBody>> {
    if (!this.axios || typeof this.axios[this.method] === "undefined") {
      throw new Error(
        "Batch Request Manager: axios library must be provided with a valid request method"
      );
    }
    if (!Array.isArray(this.requests)) {
      throw new Error(
        "Batch Request Manager: requests are not in array format"
      );
    }
    if (!this.requests.length) {
      throw new Error("Batch Request Manager: request length is zero");
    }
    if (this.chunkSize <= 0) {
      throw new Error("Batch Request Manager: must provide valid chunksize");
    }

    const results = await this.execute();

    this.resultsArray.push(results);

    return results;
  }

  private async execute(): Promise<BatchRequestManagerResults<RequestBody>> {
    const results: BatchRequestManagerResults = {
      numRequests: this.requests.length,
      attempts: 0,
      completed: 0,
      error: 0,
      resolvedData: [],
      errorData: [],
      unsentData: [],
    };

    const isUsingBody: boolean =
      this.method === "post" ||
      this.method === "put" ||
      this.method === "patch";
    let shortCircuitLoop = false;

    for (let i = 0; i < results.numRequests; i += this.chunkSize) {
      const from = i * this.chunkSize;
      const remainder = results.numRequests - from;

      if (shortCircuitLoop) {
        const unsentRequests = this.requests.slice(from);
        results.unsentData = unsentRequests.map((request) => {
          const [url, body, options] = request;
          return body;
        });
        console.log("Loop finished due to an error.");
        break;
      } else if (remainder > 0 && remainder < this.chunkSize) {
        const requests = this.requests.slice(from, from + this.chunkSize);
        results.attempts += requests.length;

        await Promise.all(
          requests.map((request) => {
            const [url, body, options] = request;
            const promise = isUsingBody
              ? this.axios[this.method](url, body, options)
              : this.axios[this.method](url, options);
            return promise
              .then(() => {
                results.resolvedData.push(body);
                return body;
              })
              .catch(() => {
                results.errorData.push(body);
                return undefined;
              });
          })
        ).then((responses) => {
          const numFailed = responses.map(
            (response) => typeof response === "undefined"
          ).length;
          if (numFailed > 0 && this.stopOnError) {
            shortCircuitLoop = true;
          }
        });
      } else {
        console.log("Loop has finished.");
        break;
      }
    }

    return results;
  }

  mostRecentResults(): BatchRequestManagerResults<RequestBody> | null {
    if (!this.mostRecentResults.length) {
      return null;
    }
    return this.mostRecentResults[this.mostRecentResults.length - 1];
  }
}

export default BatchRequestManager;
