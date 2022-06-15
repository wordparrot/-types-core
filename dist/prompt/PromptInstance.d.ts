import { PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { Prompt } from ".";
export interface PromptInstance {
    id: string;
    status: string;
    passEvent: boolean;
    recipients: PromptRecipient[];
    data: any;
    prompt: Prompt;
    promptId: string;
    dataStoreId: string;
    dataStore: DataStore;
    pipelineNodeId: string;
    pipelineNode: PipelineNode;
    passedEventAt: string;
    createdAt: string;
    updatedAt: string;
}
