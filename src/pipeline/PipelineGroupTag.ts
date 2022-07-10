import { PipelineGroup } from "./PipelineGroup";
import { Pipeline } from "..";
import { Listener } from "..";
import { Webhook } from "..";
import { Prompt } from "..";

export interface PipelineGroupTag {
  id: string;
  title: string;
  content: string;
  entityType: string;
  entityId: string;

  orderCollection: PipelineGroupTagOrder[];

  pipelineGroup: PipelineGroup;
  pipelineGroupId: string;

  pipelines: Pipeline[];
  listeners: Listener[];
  webhooks: Webhook[];
  prompts: Prompt[];

  createdAt: string;
  updatedAt: string;
}

export interface PipelineGroupTagOrder {
  index: string;
  type: string;
  id: string;
}
