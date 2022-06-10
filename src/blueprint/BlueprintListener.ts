import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Listener } from "..";
import { InitialValues } from "..";

export interface BlueprintListener {
  title: string;
  content: string;

  initialValues: InitialValues;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];

  downstreamPipelines?: string[];
}
