import { ActionFormConfiguration } from ".";
import { CredentialFormConfiguration } from ".";
import { ListenerFormConfiguration } from ".";
import { FormConfigurationUsingActionForm } from ".";
import { WebhookFormConfiguration } from ".";
import { Blueprint } from "../blueprint";
import { PromptFormConfiguration } from ".";

export interface PluginFormConfiguration<
  A = string,
  C = string,
  L = string,
  W = string
> {
  actions: ActionFormConfiguration<A>[];
  credentials?: (
    | CredentialFormConfiguration<C>
    | FormConfigurationUsingActionForm
  )[];
  listeners?: (
    | ListenerFormConfiguration<L>
    | FormConfigurationUsingActionForm
  )[];
  webhooks?: (WebhookFormConfiguration<W> | FormConfigurationUsingActionForm)[];
  blueprints?: Blueprint<A, L, W>[];
  prompts?: PromptFormConfiguration[];
}
