import { BlueprintPipelineNode } from "./BlueprintPipelineNode";
import { InitialValues } from "..";
import { FieldItem } from "..";
import { ValidationSchemaItem } from "..";
export interface BlueprintPipeline<A = string> {
    title: string;
    content: string;
    initialValues: InitialValues<A>;
    fields?: FieldItem[];
    validationSchema?: ValidationSchemaItem[];
    nodes: BlueprintPipelineNode[];
}
