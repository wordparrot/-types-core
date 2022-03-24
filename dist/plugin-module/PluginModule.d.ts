import { PluginModuleActionFactory, PluginModuleCredentialFactory, PluginModuleListenerFactory, PluginModuleWebhookFactory } from ".";
export interface PluginMainModule {
    actions: PluginModuleActionFactory;
    listeners: PluginModuleListenerFactory;
    credentials: PluginModuleCredentialFactory;
    webhooks: PluginModuleWebhookFactory;
}
