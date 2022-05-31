import { PipelineNode } from "..";
import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
export interface BlueprintPipelineNode {
    title: string;
    content: string;
    initialValues: Partial<PipelineNode>;
    validationSchema?: ValidationSchemaItem[];
    fields?: FieldItem[];
    parentNodeTitle: string | null;
    downstreamPipelines?: string[];
}
