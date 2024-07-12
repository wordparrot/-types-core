export type PipelineBatchProcessConfigType = "json" | "csv" | "fileMetadata";

export type PipelineBatchProcessConfigErrorHandling =
  | "ignore"
  | "warn"
  | "error";

export interface PipelineBatchProcessConfig {
  type: PipelineBatchProcessConfigType;
  batchSize: number; // By default, 1.
  onError: PipelineBatchProcessConfigErrorHandling;
  nodes: string[]; // An array of strings denoting action provider names.
}
