import { ActionFormConfiguration } from '.';
import { CredentialFormConfiguration } from '.';
import { ListenerFormConfiguration } from '.';
import { FormConfigurationUsingActionForm } from '.';
import { WebhookFormConfiguration } from '.';
export interface PluginFormConfiguration {
    actions: ActionFormConfiguration[];
    credentials?: (CredentialFormConfiguration | FormConfigurationUsingActionForm)[];
    listeners?: (ListenerFormConfiguration | FormConfigurationUsingActionForm)[];
    webhooks?: (WebhookFormConfiguration | FormConfigurationUsingActionForm)[];
}
