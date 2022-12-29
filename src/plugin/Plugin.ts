import { HubPlugin, PluginError } from ".";
import {
  ActionFormConfiguration,
  CredentialFormConfiguration,
  ListenerFormConfiguration,
  WebhookFormConfiguration,
  PromptFormConfiguration,
} from "..";
import { Blueprint } from "..";

export interface Plugin extends HubPlugin {
  id: string;
  name: string;
  active: boolean;
  hubPluginId: string;
  official: boolean;

  actionLogo?: string;
  listenerLogo?: string;
  credentialLogo?: string;
  webhookLogo?: string;

  blueprints?: Blueprint[];
  actions: ActionFormConfiguration[];
  credentials: CredentialFormConfiguration[];
  listeners: ListenerFormConfiguration[];
  webhooks: WebhookFormConfiguration[];
  prompts: PromptFormConfiguration[];

  errors: {
    actions: Record<string, PluginError>;
    listeners: Record<string, PluginError>;
    credentials: Record<string, PluginError>;
  };

  translations: {
    languages: Record<string, Record<string, string>>;
  };

  createdAt: string;
  updatedAt: string;
}
