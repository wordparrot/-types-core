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

export declare type CredentialGenerateAuthURIFunction =
  | ((
      body: DynamicServiceBody,
      lib: SandboxLib
    ) => CredentialGenerateAuthURIReturnValue)
  | (<T = any>(
      body: DynamicServiceBody,
      lib: SandboxLib,
      config: T
    ) => CredentialGenerateAuthURIReturnValue);

export type CredentialTestReturnValue =
  Promise<DynamicServiceResponseOutputCredentialTest>;

export declare type CredentialTestFunction =
  | ((body: DynamicServiceBody, lib: SandboxLib) => CredentialTestReturnValue)
  | (<T = any>(
      body: DynamicServiceBody,
      lib: SandboxLib,
      config: T
    ) => CredentialTestReturnValue);

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;

export type ListenerReturnFunction =
  | ((body: DynamicServiceBody, lib: SandboxLib) => ListenerReturnValue)
  | (<T = any>(
      body: DynamicServiceBody,
      lib: SandboxLib,
      config: T
    ) => ListenerReturnValue);

export type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;

export type WebhookReturnFunction =
  | ((body: DynamicServiceBody, lib: SandboxLib) => WebhookReturnValue)
  | (<T = any>(
      body: DynamicServiceBody,
      lib: SandboxLib,
      config: T
    ) => WebhookReturnValue);
