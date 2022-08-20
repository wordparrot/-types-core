export declare class BatchManager<BatchItem = any, BatchReturnValue = any> {
    private batchItems;
    private batchSize;
    private stopOnFailure;
    private resultsArray;
    private startingIndex;
    private endingIndex?;
    private defaultHandler;
    constructor(config: BatchManagerConfig<BatchItem, BatchReturnValue>);
    load(moreBatchItems: BatchItem[]): void;
    setStartingIndex(index: number): void;
    run(): Promise<BatchResults<BatchItem>>;
    private execute;
    mostRecentResult(): BatchResults<BatchItem> | null;
    allResults(): BatchResults<BatchItem>[];
    getSuccessValues(batchResults?: BatchResults): BatchReturnValue[];
    hasFailed(): boolean;
    combine(batchResultsArray: BatchResults[]): BatchResults;
    static hasFinished(batchResults: BatchResults): boolean;
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
    stopOnFailure: boolean;
    startingIndex?: number;
    defaultHandler: (batchItem: BatchItem) => Promise<BatchItemReturnValue>;
}
export {};
