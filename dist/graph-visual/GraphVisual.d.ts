import { Listener, Pipeline, PipelineGroup, Prompt, Webhook } from "..";
export declare type GraphVisualChildType = "listener" | "pipeline" | "prompt" | "webhook";
export interface GraphVisualChild {
    id: string | null;
    type: GraphVisualChildType;
    index: string;
    children: GraphVisualChild[];
}
export interface GraphVisual {
    id?: string;
    title?: string;
    content?: string;
    entityType: string;
    entityId: string;
    orderCollection?: GraphVisualChild[];
    pipelineGroup?: PipelineGroup;
    pipelineGroupId?: string;
    pipelines?: Pipeline[];
    listeners?: Listener[];
    webhooks?: Webhook[];
    prompts?: Prompt[];
    createdAt?: string;
    updatedAt?: string;
}
