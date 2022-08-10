declare class BatchManager<BatchItem = any, BatchReturnValue = any> {
    private batchItems;
    private batchSize;
    private stopOnError;
    private resultsArray;
    private currentIndex;
    private defaultHandler;
    constructor(config: BatchManagerConfig<BatchItem, BatchReturnValue>);
    load(moreBatchItems: BatchItem[]): void;
    run(): Promise<BatchManagerResults<BatchItem>>;
    private execute;
    mostRecentResult(): BatchManagerResults<BatchItem> | null;
    allResults(): BatchManagerResults<BatchItem>[];
}
export default BatchManager;
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
    currentIndex?: number;
    defaultHandler: (batchItem: BatchItem) => Promise<BatchItemReturnValue>;
}
