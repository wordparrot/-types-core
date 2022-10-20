import { Pipeline } from ".";
import { Site } from "..";
import { User } from '..';
import { Prompt } from '..';
import { Webhook } from '..';
import { Listener } from '..';
export interface PipelineGroup {
    id: string;
    banner: string;
    title: string;
    content: string;
    pipelines: Pipeline[];
    prompts?: Prompt[];
    listeners?: Listener[];
    webhooks?: Webhook[];
    site: Site;
    user: User;
    createdAt: string;
    updatedAt: string;
}
