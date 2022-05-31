import { Pipeline, PipelineNode } from ".";
import { DataStore } from "..";
export interface Prompt {
    id: string;
    title: string;
    content: string;
    provider: string;
    type: string;
    requireAllRecipients: boolean;
    values: Record<string, any>;
    dataStoreId: string;
    dataStore: DataStore;
    pipelineNodeId: string;
    pipelineNode: PipelineNode;
    downstreamPipelines?: Pipeline[];
    instances: PromptInstance[];
    createdAt: string;
    updatedAt: string;
}
export interface PromptInstance {
    id: string;
    promptId: string;
    status: string;
    passEvent: boolean;
    requireAllRecipients: boolean;
    recipients: Record<string, PromptRecipient>;
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
