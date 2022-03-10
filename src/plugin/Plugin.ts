import { HubPlugin, PluginError, PluginAction, PluginCredential, PluginListener } from ".";

export interface Plugin extends HubPlugin {
  id: string
  name: string
  active: boolean
  hubPluginId: string
  
  actions: PluginAction[]
  credentials: PluginCredential[]
  listeners: PluginListener[]
  
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