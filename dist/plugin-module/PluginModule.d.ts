import { ActionRegister, CredentialRegister, ListenerRegister, WebhookRegister } from "../plugin-form";
export interface PluginMainModule {
    actions: ActionRegister;
    listeners: ListenerRegister;
    credentials: CredentialRegister;
    webhooks: WebhookRegister;
}
