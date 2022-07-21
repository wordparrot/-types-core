import { WebhookReturnFunction, PluginModuleWebhookFactory } from "..";
export interface WebhookRegisterItem<T = string> {
    provider: T;
    methods: {
        main: WebhookReturnFunction;
    };
}
export declare type WebhookRegister<T = string> = (webhookRegisterItemArray: WebhookRegisterItem<T>[]) => PluginModuleWebhookFactory;
