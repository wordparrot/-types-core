import { DynamicFormField } from ".";
import { PromptPolicy } from "..";

export type DynamicFormSpecificationEntityType = "pipeline" | "p";

export interface DynamicFormSpecification {
  id: string;

  title: string;
  content: string;
  displayTitle: string;
  displayContent: string;

  hideReadonly: boolean;
  fields: DynamicFormField[];

  promptPolicy: PromptPolicy;
  promptPolicyId: string;

  createdAt: string;
  updatedAt: string;
}
