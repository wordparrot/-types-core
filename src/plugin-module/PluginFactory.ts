import {
  ActionFactory,
  CredentialFactory,
  ListenerFactory,
  WebhookFactory,
} from "..";

export interface PluginFactory {
  actions: ActionFactory;
  listeners: ListenerFactory;
  credentials: CredentialFactory;
  webhooks: WebhookFactory;
}
