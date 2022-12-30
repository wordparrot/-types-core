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
  fieldStatusMap: Record<string, FieldStatusMapItem>;

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
