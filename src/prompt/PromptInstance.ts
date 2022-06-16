import { Pipeline, PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { Prompt } from ".";
import { FileMetadata, Csv } from "..";
import { PromptInstanceOptions } from ".";

export interface PromptInstance extends PromptInstanceOptions {
  id: string;
  status: string;
  passEvent: boolean;

  fileMetadata: FileMetadata[];
  csv: Csv[];
  json: any[];
  data: any;

  recipients: PromptRecipient[];
  prompt: Prompt;
  promptId: string;
  dataStoreId: string;
  dataStore: DataStore;
  pipelineNodeId: string;
  pipelineNode: PipelineNode;

  passedEventAt: string;
  createdAt: string;
  updatedAt: string;
}
