import { Pipeline, PipelineBatchProcessConfig } from ".";
import { PipelineBatchProcessStatus } from ".";
export interface PipelineBatchProcess {
    id: string;
    status: PipelineBatchProcessStatus;
    pipelineId: string;
    pipeline: Pipeline;
    config: PipelineBatchProcessConfig;
    createdAt?: string;
    updatedAt?: string;
}
