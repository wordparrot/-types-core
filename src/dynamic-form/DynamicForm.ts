import { DynamicFormField, DynamicFormSpecification } from ".";
import { PipelineNode, PromptInstance } from "..";


// Dynamic Form type allows users to create their own forms to serve to their users. Not to be confused with prompts/prompt instances/prompt policies.
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
