import { FileMetadata, Csv, Prompt, PromptInstance } from "..";

export interface PromptRecipient {
  id: string;
  status: string;

  enableDownloads?: boolean;
  enableUploads?: boolean;

  data: any;

  prompt: Prompt;
  promptId: string;

  promptInstance: PromptInstance;
  promptInstanceId: string;

  fileMetadata: FileMetadata[];
  csv: Csv[];
  json: any[];

  name: string;
  email: string;
  userId: string;

  createdAt: string;
  updatedAt: string;
}
