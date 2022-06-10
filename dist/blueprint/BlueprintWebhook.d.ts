import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { WebhookInitialValues } from "..";
export interface BlueprintWebhook {
    title: string;
    content: string;
    initialValues: WebhookInitialValues;
    fields?: FieldItem[];
    validationSchema?: ValidationSchemaItem[];
    downstreamPipelines?: string[];
}
