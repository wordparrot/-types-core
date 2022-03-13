import { Repository } from ".";
import { RepositoryItem } from ".";
import { PipelineFlow } from "..";
export interface RepositoryHistory {
    id: string;
    operation: string;
    repository: Repository;
    repositoryId: string;
    repositoryItems?: RepositoryItem[];
    pipelineFlow: PipelineFlow;
    createdAt: string;
    updatedAt: string;
}
