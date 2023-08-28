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

export type ActionReturnFunction =
  | ((
      body: DynamicServiceBody,
      lib: SandboxLib
    ) => ActionReturnValue | ListenerReturnValue)
  | (<T = any>(
      body: DynamicServiceBody,
      lib: SandboxLib,
      config: T
    ) => ActionReturnValue | ListenerReturnValue);

export type CredentialReturnValue =
  Promise<DynamicServiceResponseOutputCredentialAuthCallback>;

export type CredentialReturnFunction =
  | ((body: DynamicServiceBody, lib: SandboxLib) => CredentialReturnValue)
  | (<T = any>(
      body: DynamicServiceBody,
      lib: SandboxLib,
      config: T
    ) => CredentialReturnValue);

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
