import { BlueprintPipelineNode } from "./BlueprintPipelineNode";
import { InitialValues } from "..";
export interface BlueprintPipeline {
    title: string;
    content: string;
    initialValues: InitialValues;
    nodes: BlueprintPipelineNode[];
}
