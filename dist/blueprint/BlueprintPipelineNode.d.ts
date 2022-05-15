import { PipelineNode } from "..";
import { ActionValidationSchemaItem } from "..";
import { ActionFieldItem } from "..";
export interface BlueprintPipelineNode {
    title: string;
    content: string;
    initialValues: PipelineNode;
    validationSchema?: ActionValidationSchemaItem[];
    fields?: ActionFieldItem[];
    parentNodeTitle: string | null;
}
