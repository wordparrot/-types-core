import { DynamicFormField } from ".";
import { PromptPolicy } from "..";

export type DynamicFormSpecificationEntityType = "pipeline" | "prompt";

export interface DynamicFormSpecification {
  id: string;

  title: string;
  content: string;

  displayTitle: string;
  displayContent: string;
  displayButton: string;
  displayLink: string;

  fields: DynamicFormField[];

  promptPolicy: PromptPolicy;
  promptPolicyId: string;

  createdAt: string;
  updatedAt: string;
}
