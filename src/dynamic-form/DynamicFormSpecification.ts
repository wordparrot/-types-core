import { DynamicFormField } from ".";
import { User } from "..";

export interface DynamicFormSpecification {
  id: string;
  hideReadonly: boolean;
  fields: DynamicFormField[];

  entityType: "pipeline" | "prompt";

  promptId: string;
  repositoryId: string;
  projectId: string;
  pipelineNodeId: string;

  users: User[];

  createdAt: string;
  updatedAt: string;
}
