import { WebhookReturnFunction, PluginModuleWebhookFactory } from "..";

export interface WebhookRegisterItem<T = string> {
  provider: T;
  methods: {
    main: WebhookReturnFunction;
  };
}

export type WebhookRegister = (
  webhookRegisterItemArray: WebhookRegisterItem[]
) => PluginModuleWebhookFactory;
