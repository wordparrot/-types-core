import { Pipeline } from "..";
import { PromptRecipient } from ".";
import { PromptInstance } from ".";
export interface Prompt {
    id: string;
    title: string;
    content: string;
    provider: string;
    type: string;
    requireAllRecipients: boolean;
    values: Record<string, any>;
    defaultRecipients: Record<string, PromptRecipient>;
    downstreamPipelines: Pipeline[];
    instances: PromptInstance[];
    createdAt: string;
    updatedAt: string;
}
