import {
  DynamicServiceBody,
  DynamicServiceResponseOutput,
  DynamicServiceResponseOutputCredentialAuthCallback,
  DynamicServiceResponseOutputCredentialGenerateAuthURI,
  DynamicServiceResponseOutputCredentialTest,
  DynamicServiceResponseOutputListener,
  DynamicServiceResponseOutputWebhook,
} from "..";
import { SandboxLib } from "..";

export type ActionReturnValue = Promise<DynamicServiceResponseOutput>;

export type ActionReturnFunction = <T = any>(
  body: DynamicServiceBody,
  lib: SandboxLib,
  config?: T
) => ActionReturnValue | ListenerReturnValue;

export type CredentialReturnValue =
  Promise<DynamicServiceResponseOutputCredentialAuthCallback>;

export type CredentialReturnFunction = <T = any>(
  body: DynamicServiceBody,
  lib: SandboxLib,
  config?: T
) => CredentialReturnValue;

export type CredentialGenerateAuthURIReturnValue =
  Promise<DynamicServiceResponseOutputCredentialGenerateAuthURI>;

export declare type CredentialGenerateAuthURIFunction = <T = any>(
  body: DynamicServiceBody,
  lib: SandboxLib,
  config?: T
) => CredentialGenerateAuthURIReturnValue;

export type CredentialTestReturnValue =
  Promise<DynamicServiceResponseOutputCredentialTest>;

export declare type CredentialTestFunction = <T = any>(
  body: DynamicServiceBody,
  lib: SandboxLib,
  config?: T
) => CredentialTestReturnValue;

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;

export type ListenerReturnFunction = <T = any>(
  body: DynamicServiceBody,
  lib: SandboxLib,
  config?: T
) => ListenerReturnValue;

export type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;

export type WebhookReturnFunction = <T = any>(
  body: DynamicServiceBody,
  lib: SandboxLib,
  config?: T
) => WebhookReturnValue;
