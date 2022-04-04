import { ActionFormConfiguration } from '.'
import { CredentialFormConfiguration } from '.'
import { ListenerFormConfiguration } from '.'
import { ListenerFormConfigurationUsingActionForm } from '.'
import { WebhookFormConfiguration } from '.'

export interface PluginFormConfiguration {
    actions: ActionFormConfiguration[]
    credentials?: CredentialFormConfiguration[]
    listeners?: (ListenerFormConfiguration | ListenerFormConfigurationUsingActionForm)[]
    webhooks?: WebhookFormConfiguration[]
}