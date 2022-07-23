import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Listener } from "..";
import { InitialValues } from "..";

export interface BlueprintListener<L = string> {
  title: string;
  content: string;

  initialValues: InitialValues<L>;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];

  downstreamPipelines?: string[];
}
