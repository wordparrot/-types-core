import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Webhook } from "..";
import { WebhookInitialValues } from "..";

export interface BlueprintWebhook {
  title: string;
  content: string;

  initialValues: WebhookInitialValues;
  validationSchema?: ValidationSchemaItem[];
  fields?: FieldItem[];

  downstreamPipelines?: string[];
}
