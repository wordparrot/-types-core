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
export declare type WebhookRegister<T> = Record<string, WebhookRegisterItem<T>>;
export declare type WebhookRegisterFactory = <T>(WebhookRegisterItemArray: WebhookRegisterItem<T>[]) => WebhookRegister<T>;
export declare type WebhookFactory<T = any> = () => WebhookRegister<T>;
