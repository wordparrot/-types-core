import { PipelineBatchProcessConfig } from ".";
import { PipelineBatchProcessJobStatus } from ".";
import { ActionReturnValue } from "..";
export interface BatchOutput {
    index: number;
    start: number;
    data: {
        pipelineNodeId: string;
        end: number;
        output: ActionReturnValue;
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
