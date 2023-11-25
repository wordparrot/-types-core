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

export type WebhookRegister<T> = Record<string, WebhookRegisterItem<T>>;

export type WebhookRegisterFactory = <T>(
  WebhookRegisterItemArray: WebhookRegisterItem<T>[]
) => WebhookRegister<T>;

export type WebhookFactory<T = any> = () => WebhookRegister<T>;
