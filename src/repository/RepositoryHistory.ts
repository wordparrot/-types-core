import { Repository, RepositoryTag, RepositoryItem, RepositoryFile } from ".";
import { PipelineFlow } from "..";
import { CsvReport } from "..";
import { Csv } from "..";
import { DataStore } from "..";

export type RepositoryHistoryOperation = "add" | "remove" | "move" | "copy";

export interface RepositoryHistory {
  id: string;
  operation: RepositoryHistoryOperation;
  destination?: string;
  title?: string;
  content?: string;
  filename?: string;

  repository: Repository;
  repositoryId: string;

  pipelineFlow: PipelineFlow;

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
