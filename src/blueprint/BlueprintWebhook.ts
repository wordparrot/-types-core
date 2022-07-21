import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Webhook } from "..";
import { WebhookInitialValues } from "..";

export interface BlueprintWebhook<T = string> {
  title: string;
  content: string;

  initialValues: WebhookInitialValues<T>;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];

  downstreamPipelines?: string[];
}
