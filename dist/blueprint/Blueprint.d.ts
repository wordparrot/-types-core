import { BlueprintPipeline } from "..";
import { BlueprintPlugin } from "..";
import { BlueprintListener } from "..";
import { BlueprintWebhook } from "..";
import { BlueprintPrompt } from "..";
export interface Blueprint<A = string, L = string, W = string> {
    title: string;
    content: string;
    author?: string;
    name?: string;
    version?: string;
    logo?: string;
    pipelineGroupTitle?: string;
    dependencies?: BlueprintPlugin[];
    pipelines: BlueprintPipeline<A>[];
    listeners?: BlueprintListener<L>[];
    webhooks?: BlueprintWebhook<W>[];
    prompts?: BlueprintPrompt[];
}
