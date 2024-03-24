import { RepositoryItem } from "..";
import { Entry } from "..";
import { Pipeline, PipelineNodeReport, PipelineFlow, PipelineJobSequence, PipelineGroup } from ".";
export type PipelineJobOutcome = "completed" | "partial" | "failure";
export interface PipelineJob {
    id: string;
    status: string;
    runOnce: boolean;
    linkedRedisKey: string | null;
    pipeline: Pipeline;
    pipelineId: string;
    pipelineGroup: PipelineGroup;
    pipelineGroupId: string;
    sequence: PipelineJobSequence;
    pipelineJobSequenceId: string;
    upstreamPipelineJob: PipelineJob;
    upstreamPipelineJobId: string;
    repositoryItems: RepositoryItem[];
    pipelineFlows: PipelineFlow[];
    pipelineNodeReports: PipelineNodeReport[];
    entries: Entry[];
    completedAt: string;
    createdAt: string;
    updatedAt: string;
}
