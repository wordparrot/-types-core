import { FileMetadata, Csv } from "..";

export interface PromptRecipient {
  id: string;
  status: string;

  data: any;
  fileMetadata: FileMetadata[];
  csv: Csv[];
  json: any[];

  email: string;
  userId: string;

  createdAt: string;
  updatedAt: string;
}
