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

export type UntypedActionReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => ActionReturnValue | ListenerReturnValue;
export type TypedActionReturnFunction<T> = (
  body: DynamicServiceBody,
  lib: SandboxLib,
  config: T
) => ActionReturnValue | ListenerReturnValue;

export type ActionReturnFunction<T = any> =
  | UntypedActionReturnFunction
  | TypedActionReturnFunction<T>;

export type CredentialReturnValue =
  Promise<DynamicServiceResponseOutputCredentialAuthCallback>;

export type UntypedCredentialReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => ActionReturnValue | ListenerReturnValue;
export type TypedCredentialReturnFunction<T> = (
  body: DynamicServiceBody,
  lib: SandboxLib,
  config: T
) => CredentialReturnValue;

export type CredentialReturnFunction<T = any> =
  | UntypedCredentialReturnFunction
  | TypedCredentialReturnFunction<T>;

export type CredentialGenerateAuthURIReturnValue =
  Promise<DynamicServiceResponseOutputCredentialGenerateAuthURI>;

export type UntypedCredentialGenerateAuthURIFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => CredentialGenerateAuthURIReturnValue;
export type TypedCredentialGenerateAuthURIFunction<T> = (
  body: DynamicServiceBody,
  lib: SandboxLib,
  config: T
) => CredentialGenerateAuthURIReturnValue;

export declare type CredentialGenerateAuthURIFunction<T = any> =
  | UntypedCredentialGenerateAuthURIFunction
  | TypedCredentialGenerateAuthURIFunction<T>;

export type CredentialTestReturnValue =
  Promise<DynamicServiceResponseOutputCredentialTest>;

export type UntypedCredentialTestFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => CredentialTestReturnValue;
export type TypedCredentialTestFunction<T> = (
  body: DynamicServiceBody,
  lib: SandboxLib,
  config: T
) => CredentialTestReturnValue;

export declare type CredentialTestFunction<T = any> =
  | UntypedCredentialTestFunction
  | TypedCredentialTestFunction<T>;

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;

export type UntypedListenerReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => ListenerReturnValue;
export type TypedListenerReturnFunction<T> = (
  body: DynamicServiceBody,
  lib: SandboxLib,
  config: T
) => ListenerReturnValue;

export type ListenerReturnFunction<T = any> =
  | UntypedListenerReturnFunction
  | TypedListenerReturnFunction<T>;

export type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;

export type UntypedWebhookReturnFunction = (
  body: DynamicServiceBody,
  lib: SandboxLib
) => WebhookReturnValue;
export type TypedWebhookReturnFunction<T> = (
  body: DynamicServiceBody,
  lib: SandboxLib,
  config: T
) => WebhookReturnValue;

export type WebhookReturnFunction<T = any> =
  | UntypedWebhookReturnFunction
  | TypedWebhookReturnFunction<T>;
