import { FileMetadata, Csv } from "..";
export interface PromptRecipient {
    id: string;
    status: string;
    enableDownloads?: boolean;
    enableUploads?: boolean;
    data: any;
    fileMetadata: FileMetadata[];
    csv: Csv[];
    json: any[];
    name: string;
    email: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}
