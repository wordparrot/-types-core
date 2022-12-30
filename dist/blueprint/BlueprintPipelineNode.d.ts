import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { InitialValues } from "..";
import { FieldStatusMap } from "..";
export interface BlueprintPipelineNode {
    title: string;
    content: string;
    initialValues: InitialValues;
    fields?: FieldItem[];
    validationSchema?: ValidationSchemaItem[];
    fieldStatusMap: FieldStatusMap;
    parentNodeTitle: string | null;
    downstreamPipelines?: string[];
}
