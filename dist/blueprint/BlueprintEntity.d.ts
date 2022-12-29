import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { FieldDescriptor } from "..";
export declare type FieldStatusType = "edit" | "readonly" | "hidden" | "clear";
export interface FieldStatusMapItem {
    property: string;
    status: FieldStatusType;
    descriptors: FieldDescriptor[];
    ready?: boolean;
}
export declare type FieldStatusMap = Record<string, FieldStatusMapItem>;
export interface BlueprintEntity<InitialValues = any> {
    id: string;
    title: string;
    content: string;
    initialValues: InitialValues;
    fields?: FieldItem[];
    validationSchema?: ValidationSchemaItem[];
    fieldStatusMap: Record<string, FieldStatusMapItem>;
    downstreamPipelines?: string[];
    upstreamPipelineNodes?: string[];
}
