import { HubPlugin, PluginError } from ".";
import { 
  ActionFormConfiguration, 
  CredentialFormConfiguration, 
  ListenerFormConfiguration, 
  WebhookFormConfiguration 
} from "..";

export interface Plugin extends HubPlugin {
  id: string
  name: string
  active: boolean
  hubPluginId: string
  
  actions: ActionFormConfiguration[]
  credentials: CredentialFormConfiguration[]
  listeners: ListenerFormConfiguration[]
  webhooks: WebhookFormConfiguration[]
  
  errors: {
    actions: Record<string, PluginError>
    listeners: Record<string, PluginError>
    credentials: Record<string, PluginError>
  }

  translations: {
    languages: Record<string, Record<string, string>>
  }

  createdAt: string
  updatedAt: string
}