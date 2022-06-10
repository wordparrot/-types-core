import { Pipeline } from "../pipeline";
import { BlueprintPipelineNode } from "./BlueprintPipelineNode";
import { InitialValues } from "..";
import { FieldItem } from "..";
import { ValidationSchemaItem } from "..";

export interface BlueprintPipeline {
  title: string;
  content: string;
  initialValues: InitialValues;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];
  nodes: BlueprintPipelineNode[];
}
