import { Pipeline } from "./Pipeline";
import {
  PipelineBatchProcessConfig,
  PipelineBatchProcessStatus,
} from "./PipelineBatchProcessConfig";

export interface PipelineBatchProcess {
  id: string;
  status: PipelineBatchProcessStatus;
  config: PipelineBatchProcessConfig;

  pipelineId: string;
  pipeline: Pipeline;

  latestBatchAt: string;
  createdAt: string;
  updatedAt: string;
}
