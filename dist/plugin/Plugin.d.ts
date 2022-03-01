import { HubPlugin, PluginError, PluginAction, PluginCredential, PluginListener } from ".";
export interface Plugin extends HubPlugin {
    hubPluginId: string;
    createdAt?: string;
    updatedAt?: string;
    actions: PluginAction[];
    credentials: PluginCredential[];
    listeners: PluginListener[];
    errors: {
        actions: Record<string, PluginError>;
        listeners: Record<string, PluginError>;
        credentials: Record<string, PluginError>;
    };
    translations: {
        languages: Record<string, Record<string, string>>;
    };
}
