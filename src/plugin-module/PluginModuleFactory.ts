import {
  DynamicServiceBody,
  DynamicServiceResponseOutput,
  DynamicServiceResponseOutputAuthCallback,
  DynamicServiceResponseOutputListener,
  DynamicServiceResponseOutputWebhook,
  DynamicServiceBodyWebhook,
} from "..";
import { SandboxLib } from "..";

export type ActionReturnValue = Promise<DynamicServiceResponseOutput>;

export type ActionReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => ActionReturnValue | ListenerReturnValue;

export type PluginModuleActionFactory = () => {
  [n: string]: {
    main: ActionReturnFunction;
  };
};

export type CredentialReturnValue =
  Promise<DynamicServiceResponseOutputAuthCallback>;

export type CredentialReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => CredentialReturnValue;

export type PluginModuleCredentialFactory = () => {
  [n: string]: {
    authCallback: CredentialReturnFunction;
    test: CredentialReturnFunction;
  };
};

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;

export type ListenerReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => ListenerReturnValue;

export type PluginModuleListenerFactory = () => {
  [n: string]: {
    main: ListenerReturnFunction;
  };
};

export type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;

export type WebhookReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => WebhookReturnValue;

export type PluginModuleWebhookFactory = () => {
  [n: string]: {
    main: WebhookReturnFunction;
  };
};
