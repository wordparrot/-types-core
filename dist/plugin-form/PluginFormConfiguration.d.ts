import { ActionFormConfiguration } from ".";
import { CredentialFormConfiguration } from ".";
import { ListenerFormConfiguration } from ".";
import { FormConfigurationUsingActionForm } from ".";
import { WebhookFormConfiguration } from ".";
import { BlueprintStructure } from "..";
import { PromptFormConfiguration } from ".";
export interface PluginFormConfiguration<A = string, C = string, L = string, W = string> {
    actions: ActionFormConfiguration<A>[];
    credentials?: (CredentialFormConfiguration<C> | FormConfigurationUsingActionForm<C>)[];
    listeners?: (ListenerFormConfiguration<L> | FormConfigurationUsingActionForm<L>)[];
    webhooks?: (WebhookFormConfiguration<W> | FormConfigurationUsingActionForm<W>)[];
    blueprints?: BlueprintStructure<A, L, W>[];
    prompts?: PromptFormConfiguration[];
}
