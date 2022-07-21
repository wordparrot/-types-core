import { WebhookReturnFunction } from "..";
export interface WebhookReturnMethods {
    main: WebhookReturnFunction;
}
export interface WebhookRegisterItem<T = string> {
    provider: T;
    methods: WebhookReturnMethods;
}
export declare type WebhookRegister<T = string> = (webhookRegisterItemArray: WebhookRegisterItem<T>[]) => Record<string, WebhookReturnMethods>;
