import { DynamicFormField, DynamicFormSpecification } from ".";
import { PromptInstance } from "..";

export interface DynamicForm {
  id: string;

  fields: DynamicFormField[];

  dynamicFormSpecification: DynamicFormSpecification;
  dynamicFormSpecificationId: string;

  promptInstance: PromptInstance;
  promptInstanceId: string;

  createdAt: string;
  updatedAt: string;
}
