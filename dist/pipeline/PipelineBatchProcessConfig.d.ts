export type PipelineBatchProcessConfigType = "json" | "csv" | "fileMetadata";
export type PipelineBatchProcessConfigErrorHandling = "ignore" | "warn" | "stop";
export type PipelineBatchProcessStatus = "enabled" | "disabled";
export type PipelineBatchProcessJobStatus = "pending" | "running" | "stopped" | "completed" | "partial" | "failure";
export interface PipelineBatchProcessNodeMeta {
    provider: string;
    pipelineNodeId: string;
}
export interface PipelineBatchProcessNodeMeta {
    provider: string;
    pipelineNodeId: string;
}
export interface PipelineBatchProcessConfig {
    startingIndex: number;
    endingIndex?: number;
    maxIterations?: number;
    allowEmpty?: boolean;
    type: PipelineBatchProcessConfigType;
    batchSize: number;
    onError: PipelineBatchProcessConfigErrorHandling;
    nodes: PipelineBatchProcessNodeMeta[];
}
