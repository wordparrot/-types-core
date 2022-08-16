import { PipelineNode, PipelineJob } from ".";
export interface PipelineNodeBatchProcess {
    id: string;
    status: string;
    batchIndex: number;
    batchSize: number;
    batchState: any;
    parentTrackedValues: any;
    pipelineRedis?: any;
    diff?: any;
    pipelineJob?: PipelineJob;
    pipelineJobId: string;
    pipelineNode?: PipelineNode;
    pipelineNodeId: string;
    latestBatchAt?: string;
    createdAt?: string;
    updatedAt?: string;
}
