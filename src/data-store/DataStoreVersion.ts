import { DataStore } from ".";
import { PipelineFlow } from "..";
import { PromptRecipient } from "..";

export interface DataStoreVersion {
  id: string;
  filename: string;
  data: any;

  dataStore: DataStore;
  dataStoreId: string;

  promptRecipient: PromptRecipient;
  promptRecipientId: string;

  pipelineFlow?: PipelineFlow;

  createdAt: string;
  updatedAt: string;
}
