import { BlueprintPipeline } from "..";
import { BlueprintPlugin } from "..";
import { BlueprintListener } from "..";
import { BlueprintWebhook } from "..";
import { BlueprintPrompt } from '..';
export interface Blueprint {
    title: string;
    content: string;
    author?: string;
    name?: string;
    version?: string;
    logo?: string;
    pipelineGroupTitle?: string;
    dependencies?: BlueprintPlugin[];
    pipelines: BlueprintPipeline[];
    listeners?: BlueprintListener[];
    webhooks?: BlueprintWebhook[];
    prompts?: BlueprintPrompt[];
}
