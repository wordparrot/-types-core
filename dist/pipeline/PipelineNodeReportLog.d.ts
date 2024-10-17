import { ValidationRule } from "..";
import { PipelineNode, PipelineJob } from ".";
export type PipelineNodeReportLog = {
    id: string;
    rule: ValidationRule;
    meta: {
        idProperty?: string;
        message?: string;
        data: unknown;
    }[];
    pipelineNodeId: string;
    pipelineNode?: PipelineNode;
    pipelineJobId: string;
    pipelineJob?: PipelineJob;
    createdAt: string;
    updatedAt: string;
};
