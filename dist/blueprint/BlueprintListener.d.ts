import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { InitialValues } from "..";
export interface BlueprintListener {
    title: string;
    content: string;
    initialValues: InitialValues;
    validationSchema?: ValidationSchemaItem[];
    fields?: FieldItem[];
    downstreamPipelines?: string[];
}
