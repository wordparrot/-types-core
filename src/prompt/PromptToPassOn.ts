import { FileMetadata } from "..";
import { PromptRecipient } from ".";

export interface PromptToPassOn {
  promptId: string;
  promptInstanceId: string;
  promptInstanceStatus: string;
  promptRecipients: {
    promptRecipientId: string;
    email?: string;
    userId?: string;
    data: any;
    files: FileMetadata[];
  }[];
}
