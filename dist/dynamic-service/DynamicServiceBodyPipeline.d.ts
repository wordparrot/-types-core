import { PipelineRedis } from '..';
export interface DynamicServiceBodyPipeline<T = any> {
    pipelineId: string;
    pipelineJobId: string;
    pipelineNodeId: string;
    pipelineNode: T;
    pipelineRedis: PipelineRedis;
}
