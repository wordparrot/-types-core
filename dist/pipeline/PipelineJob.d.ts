import { Pipeline, PipelineNodeReport } from '.';
import { RepositoryItem } from '..';
import { Entry } from '..';
export interface PipelineJob {
    id: string;
    repositoryItems?: RepositoryItem[];
    pipelineNodeReports?: PipelineNodeReport[];
    entries?: Entry[];
    pipeline?: Pipeline;
    pipelineId?: string;
    downstreamPipelineIds?: string[];
    status: string;
    completedAt?: string;
    createdAt: string;
    updatedAt: string;
}
