import { PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { Prompt } from ".";
import { Csv, RepositoryFile } from "..";
import { PromptPolicy } from ".";
export type PromptInstanceStatus = "open" | "closed" | "completed" | "error" | "hidden";
export interface PromptInstance {
    id: string;
    title: string;
    content: string;
    default: boolean;
    status: PromptInstanceStatus;
    passEvent: boolean;
    token: string;
    uniqId: string;
    prompt: Prompt;
    promptId: string;
    policy: PromptPolicy;
    policyId: string;
    pipelineNodes: PipelineNode[];
    recipients: PromptRecipient[];
    dataStores: DataStore[];
    files: RepositoryFile[];
    csv: Csv[];
    passedEventAt: string;
    createdAt: string;
    updatedAt: string;
}
