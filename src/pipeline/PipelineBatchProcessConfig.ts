export type PipelineBatchProcessConfigType = "json" | "csv" | "fileMetadata";

export type PipelineBatchProcessConfigErrorHandling =
  | "ignore"
  | "warn"
  | "stop";

export type PipelineBatchProcessStatus = "enabled" | "disabled";

export type PipelineBatchProcessJobStatus =
  | "pending"
  | "running"
  | "stopped"
  | "completed"
  | "partial"
  | "failure";

export interface PipelineBatchProcessNodeMeta {
  provider: string;
  pipelineNodeId: string;
}

export interface PipelineBatchProcessNodeMeta {
  provider: string;
  pipelineNodeId: string;
}

export interface PipelineBatchProcessConfig {
  startIndex: number;
  endIndex: number;
  type: PipelineBatchProcessConfigType;
  batchSize: number; // By default, 1.
  onError: PipelineBatchProcessConfigErrorHandling;
  nodes: PipelineBatchProcessNodeMeta[]; // An array of strings denoting action provider names.
}
