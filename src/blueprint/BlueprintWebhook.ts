import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Webhook } from "..";
import { WebhookInitialValues } from "..";

export interface BlueprintWebhook<W = string> {
  title: string;
  content: string;

  initialValues: WebhookInitialValues<W>;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];

  downstreamPipelines?: string[];
}
