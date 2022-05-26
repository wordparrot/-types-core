import { RepositoryItem } from "..";
import { Entry } from "..";
import { Pipeline, PipelineNodeReport, PipelineFlow } from ".";
export interface PipelineJob {
    id: string;
    status: string;
    linkedRedisKey: string | null;
    pipeline: Pipeline;
    repositoryItems: RepositoryItem[];
    pipelineFlows: PipelineFlow[];
    pipelineNodeReports: PipelineNodeReport[];
    entries: Entry[];
    completedAt: string;
    createdAt: string;
    updatedAt: string;
}
