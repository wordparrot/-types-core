import { DataBackupSaved } from ".";
import { PipelineNode } from "..";
import { Repository } from "..";

export interface DataBackup {
  id: string;
  title: string;
  content: string;

  uniqId: string;
  filename: string;
  format: string;
  version: string;
  saveBackups: boolean;

  saved: DataBackupSaved[];
  pipelineNodes: PipelineNode[];
  repositories: Repository[];

  createdAt: string;
  updatedAt: string;
}
