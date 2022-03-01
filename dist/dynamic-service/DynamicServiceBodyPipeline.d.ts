import { PipelineNode } from "..";
export interface DynamicServiceBodyPipeline {
    pipelineId: string;
    pipelineJobId: string;
    pipelineNodeId: string;
    pipelineNode: PipelineNode;
}
