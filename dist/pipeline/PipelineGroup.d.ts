import { Pipeline } from ".";
import { BlueprintInstallation, Site } from "..";
import { User } from "..";
import { Prompt } from "..";
import { Webhook } from "..";
import { Listener } from "..";
export interface PipelineGroup {
    id: string;
    banner: string;
    title: string;
    content: string;
    pipelines: Pipeline[];
    prompts?: Prompt[];
    listeners?: Listener[];
    webhooks?: Webhook[];
    blueprintInstallations?: BlueprintInstallation[];
    site: Site;
    user: User;
    createdAt: string;
    updatedAt: string;
}
