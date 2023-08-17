import { Repository, RepositoryTag, RepositoryItem, RepositoryFile } from ".";
import { PipelineFlow } from "..";
import { CsvReport } from "..";
import { Csv } from "..";
import { DataStore } from "..";

export type RepositoryHistoryOperation = "add" | "remove" | "move";

export interface RepositoryHistory {
  id: string;
  operation: RepositoryHistoryOperation;

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
