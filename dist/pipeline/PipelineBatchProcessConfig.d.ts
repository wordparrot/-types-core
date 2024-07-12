export type PipelineBatchProcessConfigType = "json" | "csv" | "fileMetadata";
export type PipelineBatchProcessConfigErrorHandling = "ignore" | "warn" | "error";
export interface PipelineBatchProcessConfig {
    type: PipelineBatchProcessConfigType;
    batchSize: number;
    onError: PipelineBatchProcessConfigErrorHandling;
    nodes: string[];
}
