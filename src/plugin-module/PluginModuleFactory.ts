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

export type PluginModuleActionFactory = () => {
  [n: string]: {
    main: (
      body: DynamicServiceBody,
      lib: SandboxLib
    ) => ActionReturnValue | ListenerReturnValue;
  };
};

export type CredentialReturnValue =
  Promise<DynamicServiceResponseOutputAuthCallback>;

export type PluginModuleCredentialFactory = () => {
  [n: string]: {
    authCallback: (
      body: DynamicServiceBody,
      lib: SandboxLib
    ) => CredentialReturnValue;
    test: (body: DynamicServiceBody, lib: SandboxLib) => CredentialReturnValue;
  };
};

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;

export type PluginModuleListenerFactory = () => {
  [n: string]: {
    main: (body: DynamicServiceBody, lib: SandboxLib) => ListenerReturnValue;
  };
};

export type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;

export type PluginModuleWebhookFactory = () => {
  [n: string]: {
    main: (body: DynamicServiceBody, lib: SandboxLib) => WebhookReturnValue;
  };
};
