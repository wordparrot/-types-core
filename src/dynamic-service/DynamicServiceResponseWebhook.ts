import { DynamicServiceResponseOutput } from ".";

export interface DynamicServiceResponseOutputWebhook<B, H, P> extends DynamicServiceResponseOutput {
    webhookRoute: string
    webhookMethod: string
    webhookBody?: B
    webhookHeaders?: H
    webhookParams?: P
}