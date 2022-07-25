import {
  DynamicServiceBody,
  DynamicServiceResponseOutput,
  DynamicServiceResponseOutputAuthCallback,
  DynamicServiceResponseOutputListener,
  DynamicServiceResponseOutputWebhook,
} from "..";
import { SandboxLib } from "..";

export type ActionReturnValue = Promise<DynamicServiceResponseOutput>;

export type ActionReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => ActionReturnValue | ListenerReturnValue;

export type CredentialReturnValue =
  Promise<DynamicServiceResponseOutputAuthCallback>;

export type CredentialReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => CredentialReturnValue;

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;

export type ListenerReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => ListenerReturnValue;

export type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;

export type WebhookReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => WebhookReturnValue;
