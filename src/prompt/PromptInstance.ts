import { Pipeline, PipelineNode, PipelineGroup } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { Prompt } from ".";
import { FileMetadata, Csv, RepositoryFile } from "..";
import { PromptPolicy } from ".";

export interface PromptInstance {
  id: string;
  status: string;
  passEvent: boolean;

  token: string;

  prompt: Prompt;
  promptId: string;

  policy: PromptPolicy;
  policyId: string;

  pipelineNodes: PipelineNode[];
  recipients: PromptRecipient[];
  dataStores: DataStore[];
  files: RepositoryFile[];
  csv: Csv[];

  passedEventAt: string;
  createdAt: string;
  updatedAt: string;
}
