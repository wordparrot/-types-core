import { DynamicServiceResponseOutput } from ".";
import { WebhookResponse } from '..';
export interface DynamicServiceResponseOutputWebhook extends DynamicServiceResponseOutput {
    webhookResponse: WebhookResponse;
}
