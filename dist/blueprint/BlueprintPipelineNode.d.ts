import { PipelineNode } from "../pipeline";
export interface BlueprintPipelineNode {
    title: string;
    content: string;
    initialValues: PipelineNode;
    parentNodeTitle: string | null;
}
