import { Pipeline, PipelineNode, PipelineGroup } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { PromptInstance } from ".";
import { PromptInstanceOptions } from ".";
import { Csv, RepositoryFile } from "..";

export interface Prompt extends PromptInstanceOptions {
  id: string;
  title: string;
  content: string;

  provider: string;
  type: string;

  includeCsv: boolean;
  includeFiles: boolean;
  includeJSON: boolean;

  enableDownloads: boolean;
  enableUploads: boolean;
  issueDuplicates: boolean;

  defaultRecipients: PromptRecipient[];
  downstreamPipelines: Pipeline[];
  pipelineNodes: PipelineNode[];
  instances: PromptInstance[];
  dataStores: DataStore[];
  files: RepositoryFile[];
  csv: Csv[];

  pipelineGroupId: string;
  pipelineGroup: PipelineGroup;

  createdAt: string;
  updatedAt: string;
}
