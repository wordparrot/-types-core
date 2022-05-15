import { Pipeline } from "../pipeline";
import { BlueprintPipelineNode } from "./BlueprintPipelineNode";
export interface BlueprintPipeline {
    title: string;
    content: string;
    initialValues: Partial<Pipeline>;
    nodes: BlueprintPipelineNode[];
}
