import { Pipeline } from "../pipeline";
import { BlueprintPipelineNode } from "./BlueprintPipelineNode";
import { InitialValues } from "..";
import { FieldItem } from "..";
import { ValidationSchemaItem } from "..";
import { BlueprintEntity } from "..";

export interface BlueprintPipeline<A = string> extends BlueprintEntity {
  initialValues: InitialValues<A>;
  nodes: BlueprintPipelineNode[];
}
