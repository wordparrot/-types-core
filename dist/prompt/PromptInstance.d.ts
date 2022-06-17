import { PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { Prompt } from ".";
import { FileMetadata, Csv, RepositoryFile } from "..";
import { PromptInstanceOptions } from ".";
export interface PromptInstance extends PromptInstanceOptions {
    id: string;
    status: string;
    passEvent: boolean;
    fileMetadata: FileMetadata[];
    json: any[];
    enableDownloads: boolean;
    enableUploads: boolean;
    prompt: Prompt;
    promptId: string;
    pipelineNodes: PipelineNode[];
    recipients: PromptRecipient[];
    dataStores: DataStore[];
    files: RepositoryFile[];
    csv: Csv[];
    passedEventAt: string;
    createdAt: string;
    updatedAt: string;
}
