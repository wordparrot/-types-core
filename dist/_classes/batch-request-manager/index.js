"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var BatchRequestMethod;
(function (BatchRequestMethod) {
    BatchRequestMethod["GET"] = "get";
    BatchRequestMethod["POST"] = "post";
    BatchRequestMethod["PUT"] = "put";
    BatchRequestMethod["PATCH"] = "patch";
    BatchRequestMethod["DELETE"] = "delete";
})(BatchRequestMethod || (BatchRequestMethod = {}));
class BatchRequestManager {
    constructor(config) {
        this.method = config.method;
        this.axios = config.axios;
        this.requests = config.requests;
        this.chunkSize = config.chunkSize;
        this.stopOnError = config.stopOnError;
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.axios || typeof this.axios[this.method] === "undefined") {
                throw new Error('Batch Request Manager: axios library must be provided with a valid request method');
            }
            if (!Array.isArray(this.requests)) {
                throw new Error('Batch Request Manager: requests are not in array format');
            }
            if (!this.requests.length) {
                throw new Error('Batch Request Manager: request length is zero');
            }
            if (this.chunkSize <= 0) {
                throw new Error('Batch Request Manager: must provide valid chunksize');
            }
            const results = yield this.execute();
            this.resultsArray.push(results);
            return results;
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = {
                numRequests: this.requests.length,
                attempts: 0,
                completed: 0,
                error: 0,
                resolvedData: [],
                errorData: [],
                unsentData: [],
            };
            const isUsingBody = this.method === 'post' || this.method === 'put' || this.method === 'patch';
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
                    console.log('Loop finished due to an error.');
                    break;
                }
                else if (remainder > 0 && remainder < this.chunkSize) {
                    const requests = this.requests.slice(from, from + this.chunkSize);
                    results.attempts += requests.length;
                    yield Promise.all(requests.map((request) => {
                        const [url, body, options] = request;
                        const promise = isUsingBody ? this.axios[this.method](url, body, options) : this.axios[this.method](url, options);
                        return promise
                            .then(() => {
                            results.resolvedData.push(body);
                            return body;
                        })
                            .catch(() => {
                            results.errorData.push(body);
                            return undefined;
                        });
                    }))
                        .then((responses) => {
                        const numFailed = responses.map(response => typeof response === "undefined").length;
                        if (numFailed > 0 && this.stopOnError) {
                            shortCircuitLoop = true;
                        }
                    });
                }
                else {
                    console.log('Loop has finished.');
                    break;
                }
            }
            return results;
        });
    }
    mostRecentResults() {
        if (!this.mostRecentResults.length) {
            return null;
        }
        return this.mostRecentResults[this.mostRecentResults.length - 1];
    }
}
exports.default = BatchRequestManager;
