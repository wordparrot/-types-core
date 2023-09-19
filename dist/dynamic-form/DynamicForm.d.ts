import { DynamicFormField, DynamicFormSpecification } from ".";
import { PipelineNode, PromptInstance } from "..";
export interface DynamicForm {
    id: string;
    fields: DynamicFormField[];
    dynamicFormSpecification: DynamicFormSpecification;
    dynamicFormSpecificationId: string;
    promptInstance: PromptInstance;
    promptInstanceId: string;
    pipelineNode: PipelineNode;
    pipelineNodeId: string;
    createdAt: string;
    updatedAt: string;
}
