import { PipelineNode } from ".";
export declare type PipelineNodeConditionPolicy = "AND" | "OR" | "XOR";
export declare type PipelineNodeConditionSubject = "ITEMS" | "FILES" | "JSON" | "CSV" | "PROMPTS";
export declare type PipelineNodeConditionComparator = "LESS_THAN" | "LESS_THAN_OR_EQUALS" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUALS" | "CONTAINS" | "BEFORE" | "AFTER";
export declare type PipelineNodeConditionType = "QUANTITY" | "HAS_PROPERTY";
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
