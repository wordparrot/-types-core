import { Pipeline, PipelineNode, PipelineGroup } from "..";
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

  enableDownloads: boolean;
  enableUploads: boolean;

  recipients: PromptRecipient[];
  prompt: Prompt;
  promptId: string;
  dataStoreId: string;
  dataStore: DataStore;
  pipelineNodeId: string;
  pipelineNode: PipelineNode;
  pipelineGroupId: string;
  pipelineGroup: PipelineGroup;

  passedEventAt: string;
  createdAt: string;
  updatedAt: string;
}
