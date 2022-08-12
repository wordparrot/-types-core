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
exports.BatchManager = void 0;
class BatchManager {
    constructor(config) {
        this.resultsArray = [];
        this.startingIndex = 0;
        this.batchItems = config.batchItems;
        this.batchSize = config.batchSize;
        this.stopOnFailure = config.stopOnFailure;
        if (!(config === null || config === void 0 ? void 0 : config.defaultHandler)) {
            throw new Error("Batch Manager: default handler must be provided");
        }
        this.defaultHandler = config.defaultHandler;
        if (config.startingIndex && (config === null || config === void 0 ? void 0 : config.startingIndex) > 0) {
            this.startingIndex = config.startingIndex;
        }
    }
    load(moreBatchItems) {
        this.batchItems = [...this.batchItems, ...moreBatchItems];
    }
    setStartingIndex(index) {
        this.startingIndex = index;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Array.isArray(this.batchItems)) {
                throw new Error("Batch Manager: batches are not in array format");
            }
            if (!this.batchItems.length) {
                throw new Error("Batch Manager: request length is zero");
            }
            if (this.batchSize <= 0) {
                throw new Error("Batch Manager: must provide valid batchSize");
            }
            const results = yield this.execute();
            this.resultsArray.push(results);
            return results;
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = {
                numItems: this.batchItems.length,
                totalSuccess: 0,
                totalFailed: 0,
                totalUnsent: 0,
                success: [],
                failed: [],
                unsent: [],
            };
            let shortCircuitLoop = false;
            for (let i = this.startingIndex; i < this.batchItems.length; i += this.batchSize) {
                const remainder = this.batchItems.length - i;
                if (shortCircuitLoop) {
                    const unsentBatchItems = this.batchItems.slice(i);
                    results.totalUnsent += unsentBatchItems.length;
                    results.unsent.push(unsentBatchItems.map((batchItem, batchIndex) => {
                        const batchItemResponse = {
                            index: i + batchIndex,
                            batchItem,
                            response: null,
                            success: false,
                        };
                        return batchItemResponse;
                    }));
                }
                else if (remainder > 0 && remainder <= this.batchItems.length) {
                    const requests = this.batchItems.slice(i, i + this.batchSize);
                    try {
                        const batchResponses = yield Promise.all(requests.map((batchItem, batchIndex) => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let response;
                                if (typeof batchItem === "function") {
                                    response = yield batchItem();
                                }
                                else {
                                    response = yield this.defaultHandler(batchItem);
                                }
                                const batchItemResponse = {
                                    batchItem,
                                    index: i + batchIndex,
                                    response,
                                    success: true,
                                };
                                return batchItemResponse;
                            }
                            catch (e) {
                                const batchItemResponse = {
                                    batchItem,
                                    index: i + batchIndex,
                                    response: (e === null || e === void 0 ? void 0 : e.message) || "error",
                                    success: false,
                                };
                                return batchItemResponse;
                            }
                        })));
                        const succeeded = batchResponses.filter((obj) => obj.success === true);
                        const failed = batchResponses.filter((obj) => obj.success === false);
                        if (succeeded.length) {
                            results.totalSuccess += succeeded.length;
                            results.success.push(succeeded);
                        }
                        if (failed.length) {
                            results.totalFailed += failed.length;
                            results.failed.push(failed);
                        }
                        if (failed.length && this.stopOnFailure) {
                            shortCircuitLoop = true;
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
            return results;
        });
    }
    mostRecentResult() {
        if (!this.resultsArray.length) {
            return null;
        }
        return this.resultsArray[this.resultsArray.length - 1];
    }
    allResults() {
        return this.resultsArray;
    }
}
exports.BatchManager = BatchManager;
