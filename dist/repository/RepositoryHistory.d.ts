import { Repository } from ".";
import { PipelineFlow } from "..";
export interface RepositoryHistory {
    id: string;
    operation: string;
    repository: Repository;
    pipelineFlow: PipelineFlow;
    createdAt: string;
    updatedAt: string;
}
