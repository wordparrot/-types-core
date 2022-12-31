import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { FieldDescriptor } from "..";

export type FieldStatusType = "edit" | "readonly" | "hidden" | "clear";

export interface FieldStatusMapItem {
  property: string;
  status: FieldStatusType;
  descriptors: FieldDescriptor[];
  ready?: boolean;
}

export type FieldStatusMap = Record<string, FieldStatusMapItem>;

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

export type BlueprintEntityMap = Record<string, BlueprintEntity>;

export type BlueprintEntityFormStateType =
  | "pipeline"
  | "prompt"
  | "listener"
  | "webhook"
  | "";

export interface BlueprintEntityFormState {
  id: string;
  type: BlueprintEntityFormStateType;
  providers: {
    id: string;
    title: string;
    name: string;
    ready: boolean;
    savedValues?: any;
    fieldStatusMap?: FieldStatusMap;
  }[];
  entity: any | null;
  currentProviderName?: string;
  ready?: boolean;
  savedValues?: any;
  fieldStatusMap?: FieldStatusMap;
  lastChange?: number;
}

export type BlueprintEntityFormStateMap = Record<
  string,
  BlueprintEntityFormState
>;

export type BlueprintEntityRequirementType =
  | "pipeline"
  | "pipelineNode"
  | "credential"
  | "dataStore"
  | "csv"
  | "project"
  | "pipelineGroup"
  | "entry"
  | "featuredGroup"
  | "csvReport"
  | "blueprint"
  | "repository"
  | "repositoryTag"
  | "image"
  | "category"
  | "subcategory"
  | "user"
  | "project";

export interface BlueprintEntityRequirement {
  property: string;
  requirement: BlueprintEntityRequirementType;
}

export type BlueprintEntityRequirementMap = Record<
  string,
  BlueprintEntityRequirement
>;
