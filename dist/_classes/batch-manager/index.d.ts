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
declare class BatchManager<BatchItem = any, BatchReturnValue = any> {
    private batchItems;
    private batchSize;
    private stopOnError;
    private resultsArray;
    private startingIndex;
    private handler;
    constructor(config: BatchManagerConfig<BatchItem, BatchReturnValue>);
    run(): Promise<BatchManagerResults<BatchItem>>;
    private execute;
    mostRecentResult(): BatchManagerResults<BatchItem> | null;
    allResults(): BatchManagerResults<BatchItem>[];
}
export default BatchManager;
