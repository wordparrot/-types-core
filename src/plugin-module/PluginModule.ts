import { PluginModuleActionFactory, PluginModuleCredentialFactory, PluginModuleListenerFactory } from ".";

export interface PluginMainModule {
    actions: PluginModuleActionFactory
    listeners: PluginModuleListenerFactory
    credentials: PluginModuleCredentialFactory
}