import { BlueprintPipeline } from "..";
import { BlueprintPlugin } from "..";
import { Listener } from "..";
import { Webhook } from "..";
export interface Blueprint {
    title: string;
    content: string;
    author: string;
    pipelineGroupTitle?: string;
    dependencies?: BlueprintPlugin[];
    pipelines: BlueprintPipeline[];
    listener?: Listener;
    webhook?: Webhook;
}
