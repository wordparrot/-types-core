import { PipelineOperationFailedData } from ".";
export interface PipelineOperationFailed {
    provider: string;
    pipelineNodeId: string;
    pipelineJobId: string;
    type: string;
    expected?: string;
    percentFailed?: number;
    message?: string;
    data: PipelineOperationFailedData[];
    createdAt: string;
}
