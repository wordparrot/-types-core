import { DynamicServiceResponseOutput } from ".";
import { WebhookResponse } from '..'
import { DynamicServiceResponseOutputListener } from ".";

export interface DynamicServiceResponseOutputWebhook
extends DynamicServiceResponseOutputListener {
    webhookResponse: WebhookResponse
}