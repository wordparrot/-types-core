import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { InitialValues } from "..";
export interface BlueprintPipelineNode {
    title: string;
    content: string;
    initialValues: InitialValues;
    validationSchema?: ValidationSchemaItem[];
    fields?: FieldItem[];
    parentNodeTitle: string | null;
    downstreamPipelines?: string[];
}
