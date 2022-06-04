import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Webhook } from "..";

export interface BlueprintWebhook {
  title: string;
  content: string;

  initialValues: Partial<Webhook>;
  validationSchema?: ValidationSchemaItem[];
  fields?: FieldItem[];
}
