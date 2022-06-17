import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { PromptInitialValues } from "..";

export interface BlueprintPrompt {
  title: string;
  content: string;

  initialValues: PromptInitialValues;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];

  downstreamPipelines?: string[];
  upstreamPipelineNodes?: string[];
}
