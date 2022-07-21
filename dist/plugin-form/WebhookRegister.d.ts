import { WebhookReturnFunction, PluginModuleWebhookFactory } from "..";
export interface WebhookRegisterItem<T = string> {
    provider: T;
    methods: WebhookReturnFunction;
}
export declare type WebhookRegister = (webhookRegisterItemArray: WebhookRegisterItem[]) => PluginModuleWebhookFactory;
