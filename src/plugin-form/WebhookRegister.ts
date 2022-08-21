import { WebhookReturnFunction } from "..";

export interface WebhookReturnMethods {
  main: WebhookReturnFunction;
}

export interface WebhookRegisterItem<T = string> {
  provider: T;
  methods: WebhookReturnMethods;
}

export type WebhookRegister = <T = string>(
  webhookRegisterItemArray: WebhookRegisterItem<T>[]
) => Record<string, WebhookRegisterItem<T>>;
