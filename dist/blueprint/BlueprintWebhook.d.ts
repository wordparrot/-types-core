import { BlueprintEntity } from "..";
import { WebhookInitialValues } from "..";
export interface BlueprintWebhook<W = string> extends BlueprintEntity {
    initialValues: WebhookInitialValues<W>;
}
