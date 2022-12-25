import { BlueprintEntity, ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Webhook } from "..";
import { WebhookInitialValues } from "..";

export interface BlueprintWebhook<W = string> extends BlueprintEntity {
  initialValues: WebhookInitialValues<W>;
}
