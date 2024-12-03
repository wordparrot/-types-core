import { FileMetadata, Pipeline, PipelineBatchProcessConfig } from ".";

import { PipelineBatchProcessJobStatus } from ".";
import { BatchResults } from "../_classes";
import { Csv } from "../csv";

export interface PipelineBatchProcessState {
  batchProcessId: string;
  batchProcessJobId: string;
  pipelineId: string;

  jobStatus: PipelineBatchProcessJobStatus;
  config: PipelineBatchProcessConfig;

  currentNodeId: string;
  currentIndex: string;
  hasMoreIndexes: boolean;

  results: BatchResults[];

  error: {
    pipelineNodeId: string;
    provider: string;
    message: string;
  } | null;
}
