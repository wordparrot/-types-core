import { WebhookReturnFunction } from "..";
export interface WebhookRegisterMethods {
    main: WebhookReturnFunction;
}
export interface WebhookRegisterValues {
    methods: WebhookRegisterMethods;
}
export interface WebhookRegisterItem<T = string> extends WebhookRegisterValues {
    provider: T;
}
export declare type WebhookRegister = <T = string>(webhookRegisterItemArray: WebhookRegisterItem<T>[]) => Record<string, WebhookRegisterValues>;
