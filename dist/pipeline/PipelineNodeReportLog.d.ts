import { ValidationRule } from "..";
import { PipelineNode, PipelineJob } from ".";
export type PipelineNodeReportLog = {
    id: string;
    meta: {
        rule: ValidationRule;
        data: unknown;
    }[];
    pipelineNodeId: string;
    pipelineNode?: PipelineNode;
    pipelineJobId: string;
    pipelineJob?: PipelineJob;
    createdAt: string;
    updatedAt: string;
};
