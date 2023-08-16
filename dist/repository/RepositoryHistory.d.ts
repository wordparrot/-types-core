import { Repository, RepositoryTag, RepositoryItem, RepositoryFile } from ".";
import { PipelineFlow } from "..";
import { CsvReport } from "..";
import { Csv } from "..";
import { DataStore } from "..";
export interface RepositoryHistory {
    id: string;
    operation: string;
    repository: Repository;
    repositoryId: string;
    repositoryTags: RepositoryTag[];
    repositoryFiles: RepositoryFile[];
    repositoryItems: RepositoryItem[];
    dataStores: DataStore[];
    csv: Csv[];
    csvReports: CsvReport[];
    pipelineFlow: PipelineFlow;
    pipelineFlowId: string;
    createdAt: string;
    updatedAt: string;
}
