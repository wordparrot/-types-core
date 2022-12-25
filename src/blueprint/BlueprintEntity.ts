import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";

export interface BlueprintEntity<InitialValues = any> {
  id: string;
  title: string;
  content: string;

  initialValues: InitialValues;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];

  downstreamPipelines?: string[];
  upstreamPipelineNodes?: string[];
}
