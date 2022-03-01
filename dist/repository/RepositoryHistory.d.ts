import { RepositoryItem, RepositoryTag } from ".";
import { PipelineNode, Pipeline, PipelineFlow } from "..";
import { User } from '..';
export interface RepositoryHistory {
    operation: string;
    repositoryId: string;
    repositoryItems: RepositoryItem[];
    pipelineFlow?: PipelineFlow;
    pipelines?: Pipeline[];
    pipelineNodes?: PipelineNode[];
    tags?: RepositoryTag[];
    user?: User;
    createdAt: string;
    updatedAt: string;
}
