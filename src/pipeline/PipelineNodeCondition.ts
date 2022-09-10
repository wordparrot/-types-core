import { PipelineNode } from ".";

export enum PipelineNodeConditionPolicy {
  AND = "AND",
  OR = "OR",
  XOR = "XOR",
}

export enum PipelineNodeConditionSubject {
  ITEMS = "ITEMS",
  FILES = "FILES",
  JSON = "JSON",
  CSV = "CSV",
  PROMPTS = "PROMPTS",
}

export enum PipelineNodeConditionComparator {
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUALS = "LESS_THAN_OR_EQUALS",
  EQUALS = "EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUALS = "GREATER_THAN_OR_EQUALS",
  CONTAINS = "CONTAINS",
  BEFORE = "BEFORE",
  AFTER = "AFTER",
}

export interface PipelineNodeCondition {
  id: string;
  conditions: Record<string, PipelineNodeConditionObject>;
  policy: PipelineNodeConditionPolicy;
  order: number;

  pipelineNode: PipelineNode;

  createdAt: string;
  updatedAt: string;
}

export interface PipelineNodeConditionObject {
  subject: PipelineNodeConditionSubject;
  comparator: PipelineNodeConditionComparator;
  primary: string | null;
  secondary?: string;
  tertiary?: string;
  quaternary?: string;
}
