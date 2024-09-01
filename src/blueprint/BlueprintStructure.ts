import { BlueprintPipeline } from "..";
import { BlueprintPlugin } from "..";
import { BlueprintListener } from "..";
import { BlueprintWebhook } from "..";
import { BlueprintPrompt } from "..";
import { GraphVisual } from "..";

export interface BlueprintStructure<
  A = string,
  L = string,
  W = string,
  P = string
> {
  title: string;
  content: string;
  author: string;
  name: string;

  version: string;
  exportDate: string;

  createdAt: string;
  updatedAt: string;

  projectTitle: string;
  projectContent: string;
  logo?: string;
  hubBlueprintMetaId?: string;
  hubBlueprintVersionId?: string;

  dependencies?: BlueprintPlugin[];
  pipelines: BlueprintPipeline<A>[];
  listeners?: BlueprintListener<L>[];
  webhooks?: BlueprintWebhook<W>[];
  prompts?: BlueprintPrompt<P>[];
  graphVisuals?: GraphVisual[];
}
