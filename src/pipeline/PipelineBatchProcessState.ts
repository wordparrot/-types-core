import { FileMetadata, Pipeline, PipelineBatchProcessConfig } from ".";

import { PipelineBatchProcessJobStatus } from ".";
import { BatchResults } from "../_classes";
import { DynamicServiceResponseOutput } from "..";

export interface BatchOutput {
  index: number;
  start: number;
  data: {
    pipelineNodeId: string;
    end: number;
    output: DynamicServiceResponseOutput;
    status: PipelineBatchProcessJobStatus;
  }[];
}

export interface PipelineBatchProcessState {
  batchProcessId: string;
  batchProcessJobId: string;
  pipelineId: string;

  jobStatus: PipelineBatchProcessJobStatus;
  config: PipelineBatchProcessConfig;

  currentNodeId: string;
  currentIndex: number;
  hasMoreIndexes: boolean;

  batchOutputs: BatchOutput[];

  error: {
    pipelineNodeId: string;
    provider: string;
    message: string;
  } | null;
}
