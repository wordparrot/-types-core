export type PipelineNodeBatchProcessConfigType =
  | "json"
  | "csv"
  | "fileMetadata";

export type PipelineNodeBatchProcessConfigErrorHandling =
  | "ignore"
  | "warn"
  | "error";

export interface PipelineNodeBatchProcessConfig {
  type: PipelineNodeBatchProcessConfigType;
  batchSize: number; // By default, 1.
  onError: PipelineNodeBatchProcessConfigErrorHandling;
}
