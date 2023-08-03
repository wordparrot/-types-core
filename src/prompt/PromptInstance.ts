import { PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { Prompt } from ".";
import { Csv, RepositoryFile } from "..";
import { PromptPolicy } from ".";

export interface PromptInstance {
  id: string;
  title: string;
  content: string;
  status: string;
  passEvent: boolean;
  allowEntities: string[];

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
