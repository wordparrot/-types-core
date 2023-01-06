import { Pipeline } from "../pipeline";
import { Webhook } from "../webhook";
import { Listener } from "../listener";
import { Blueprint } from "./Blueprint";
import { PipelineGroup, Prompt } from "..";
import { BlueprintEntityFormStateMap } from "..";

export interface BlueprintInstallation {
  id: string;
  title: string;
  content: string;
  version: string;
  status: string;
  hubBlueprintVersionId: string;

  entityStateMap: BlueprintEntityFormStateMap;

  blueprintId: string;
  blueprint: Blueprint;

  pipelineGroup: PipelineGroup;
  pipelineGroupId: string;

  pipelines: Pipeline[];
  listener: Listener;
  listenerId: string;
  webhook: Webhook;
  webhookId: string;
  prompt: Prompt;
  promptId: string;

  createdAt: string;
  updatedAt: string;
}
