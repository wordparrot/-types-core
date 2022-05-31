import { Pipeline, PipelineNode } from ".";
import { DataStore } from "..";

export interface Prompt {
  id: string;
  title: string;
  content: string;
  status: string;
  provider: string;
  type: string;
  passEvent: boolean;
  requireAllRecipients: boolean;

  values: Record<string, any>;
  recipients: Record<string, PromptRecipient>;

  dataStoreId: string;
  dataStore: DataStore;
  pipelineNodeId: string;
  pipelineNode: PipelineNode;
  downstreamPipelines?: Pipeline[];

  passedEventAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PromptRecipient {
  id: string;
  email: string;
  status: string;
  data: any;
}
