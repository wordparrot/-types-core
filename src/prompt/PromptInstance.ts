import { Pipeline, PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";

export interface PromptInstance {
  id: string;
  promptId: string;
  status: string;
  passEvent: boolean;

  recipients: Record<string, PromptRecipient>;

  data: any;

  dataStoreId: string;
  dataStore: DataStore;
  pipelineNodeId: string;
  pipelineNode: PipelineNode;

  passedEventAt: string;
  createdAt: string;
  updatedAt: string;
}
