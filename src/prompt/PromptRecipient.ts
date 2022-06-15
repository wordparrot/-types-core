import { FileMetadata, Csv } from "..";

export interface PromptRecipient {
  id: string;
  email: string;
  status: string;

  data: any;
  fileMetadata: FileMetadata[];
  csv: Csv[];
  json: any[];

  userId: string;

  createdAt: string;
  updatedAt: string;
}
