import { DynamicFormField } from ".";
import { User } from "..";

export type DynamicFormSpecificationEntityType = "pipeline" | "p";

export interface DynamicFormSpecification {
  id: string;

  title: string;
  content: string;

  hideReadonly: boolean;
  fields: DynamicFormField[];

  promptPolicyId: string;

  createdAt: string;
  updatedAt: string;
}
