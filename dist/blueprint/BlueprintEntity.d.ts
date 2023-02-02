import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { FieldDescriptor } from "..";
export declare type FieldStatusType = "edit" | "advise" | "readonly" | "hidden" | "clear";
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
    fieldStatusMap: FieldStatusMap;
    requirementMap: BlueprintEntityRequirementMap;
    downstreamPipelines?: string[];
    upstreamPipelineNodes?: string[];
}
export declare type BlueprintEntityMap = Record<string, BlueprintEntity>;
export declare type BlueprintEntityFormStateType = "pipeline" | "prompt" | "listener" | "webhook" | "";
export interface BlueprintEntityFormStateProvider {
    id: string;
    title: string;
    name: string;
    linkedNodeId?: string;
    parentNodeId?: string;
    ready: boolean;
    savedValues?: any;
    fieldStatusMap?: FieldStatusMap;
    requirementMap?: BlueprintEntityRequirementMap;
    downstreamPipelines?: string[];
}
export interface BlueprintEntityFormState {
    id: string;
    type: BlueprintEntityFormStateType;
    providers: BlueprintEntityFormStateProvider[];
    entity: any | null;
    currentProviderName?: string;
    ready?: boolean;
    savedValues?: any;
    fieldStatusMap?: FieldStatusMap;
    requirementMap?: BlueprintEntityRequirementMap;
    downstreamPipelines?: string[];
    lastChange?: number;
    substituteWith?: string;
}
export declare type BlueprintEntityFormStateMap = Record<string, BlueprintEntityFormState>;
export declare type BlueprintEntityRequirementType = "pipeline" | "pipelineNode" | "credential" | "dataStore" | "csv" | "project" | "pipelineGroup" | "entry" | "featuredGroup" | "csvReport" | "blueprint" | "repository" | "repositoryTag" | "image" | "category" | "subcategory" | "user" | "project";
export interface BlueprintEntityRequirement {
    property: string;
    requirement: BlueprintEntityRequirementType;
    provider?: string;
}
export declare type BlueprintEntityRequirementMap = Record<string, BlueprintEntityRequirement>;
