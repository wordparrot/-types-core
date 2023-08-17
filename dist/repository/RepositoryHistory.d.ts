import { Repository, RepositoryTag } from ".";
import { PipelineFlow } from "..";
export declare type RepositoryHistoryOperation = "add" | "remove" | "move" | "copy";
export interface RepositoryHistory {
    id: string;
    operation: RepositoryHistoryOperation;
    destination?: string;
    title?: string;
    content?: string;
    filename?: string;
    repository: Repository;
    repositoryId: string;
    repositoryTags: RepositoryTag[];
    pipelineFlow: PipelineFlow;
    pipelineFlowId: string;
    count?: {
        items: number;
        files: number;
        csv: number;
        csvReports: number;
        dataStores: number;
    };
    createdAt: string;
    updatedAt: string;
}
