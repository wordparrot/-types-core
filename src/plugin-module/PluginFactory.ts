import {
  ActionFactory,
  CredentialFactory,
  ListenerFactory,
  WebhookFactory,
} from "..";

export interface PluginFactoryObject {
  actions: ActionFactory;
  listeners: ListenerFactory;
  credentials: CredentialFactory;
  webhooks: WebhookFactory;
}

export type PluginFactory = () => PluginFactoryObject;
