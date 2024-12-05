import { PipelineJob, PipelineBatchProcessState } from ".";
import { PipelineBatchProcessJobStatus, PipelineBatchProcessConfig } from ".";
export interface PipelineBatchProcessJob {
    id: string;
    status: PipelineBatchProcessJobStatus;
    pipelineBatchProcessId: string;
    pipelineJob?: PipelineJob;
    pipelineJobId: string;
    config: PipelineBatchProcessConfig;
    state: PipelineBatchProcessState;
    createdAt?: string;
    updatedAt?: string;
    completedAt?: string;
}
