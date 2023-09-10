import { DynamicFormField, DynamicFormSpecification } from ".";
import { PromptInstance } from "..";
export interface DynamicForm {
    id: string;
    title: string;
    content: string;
    displayTitle: string;
    displayContent: string;
    hideReadonly: boolean;
    fields: DynamicFormField[];
    dynamicFormSpecification: DynamicFormSpecification;
    dynamicFormSpecificationId: string;
    promptInstance: PromptInstance;
    promptInstanceId: string;
    createdAt: string;
    updatedAt: string;
}
