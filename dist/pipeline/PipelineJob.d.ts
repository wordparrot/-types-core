import { RepositoryItem } from "..";
import { Entry } from "..";
import { Pipeline, PipelineNodeReport, PipelineFlow, PipelineJobSequence } from ".";
export interface PipelineJob {
    id: string;
    status: string;
    linkedRedisKey: string | null;
    pipeline: Pipeline;
    repositoryItems: RepositoryItem[];
    pipelineFlows: PipelineFlow[];
    pipelineNodeReports: PipelineNodeReport[];
    entries: Entry[];
    sequence: PipelineJobSequence;
    pipelineJobSequenceId: string;
    upstreamPipelineJob: PipelineJob;
    upstreamPipelineJobId: string;
    completedAt: string;
    createdAt: string;
    updatedAt: string;
}
