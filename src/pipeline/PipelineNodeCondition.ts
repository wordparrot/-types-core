import { PipelineNode } from ".";
export declare enum PipelineNodeConditionPolicy {
  AND = "AND",
  OR = "OR",
  XOR = "XOR",
}
export declare enum PipelineNodeConditionSubject {
  ITEMS = "ITEMS",
  FILES = "FILES",
  JSON = "JSON",
  CSV = "CSV",
  PROMPTS = "PROMPTS",
}
export declare enum PipelineNodeConditionComparator {
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUALS = "LESS_THAN_OR_EQUALS",
  EQUALS = "EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUALS = "GREATER_THAN_OR_EQUALS",
  CONTAINS = "CONTAINS",
  BEFORE = "BEFORE",
  AFTER = "AFTER",
}
export declare enum PipelineNodeConditionType {
  QUANTITY = "QUANTITY",
  HAS_PROPERTY = "HAS_PROPERTY",
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
  type: PipelineNodeConditionType;
  subject: PipelineNodeConditionSubject;
  comparator: PipelineNodeConditionComparator;
  primary: string | null;
  secondary?: string;
  tertiary?: string;
  quaternary?: string;
}
