import { PipelineNode } from ".";
export interface PipelineNodeCondition {
    id: string;
    subject: string;
    property: string;
    comparator: string;
    value: string;
    required: boolean;
    pipelineNode: PipelineNode;
    createdAt: string;
    updatedAt: string;
}
