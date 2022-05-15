import { Pipeline } from "../pipeline";
import { BlueprintPipelineNode } from "./BlueprintPipelineNode";

export interface BlueprintPipeline {
  title: string;
  content: string;

  initialValues: Pipeline;
  nodes: BlueprintPipelineNode[];
}
