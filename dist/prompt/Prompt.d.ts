import { Pipeline } from "..";
import { PromptRecipient } from ".";
import { PromptInstance } from ".";
import { PromptInstanceOptions } from ".";
export interface Prompt extends PromptInstanceOptions {
    id: string;
    title: string;
    content: string;
    provider: string;
    type: string;
    includeCsv: boolean;
    includeFiles: boolean;
    includeJSON: boolean;
    defaultRecipients: PromptRecipient[];
    downstreamPipelines: Pipeline[];
    instances: PromptInstance[];
    createdAt: string;
    updatedAt: string;
}
