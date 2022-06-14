import { FileMetadata } from "..";
export interface PromptRecipient {
    id: string;
    email: string;
    status: string;
    data: any;
    fileMetadata: FileMetadata[];
    userId: string;
    createdAt: string;
    updatedAt: string;
}
