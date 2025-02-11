import {
  Credential,
  DynamicServiceBodyWithLib,
  DynamicServiceResponseOutput,
  DynamicServiceResponseOutputCredentialAuthCallback,
  DynamicServiceResponseOutputCredentialGenerateAuthURI,
  DynamicServiceResponseOutputCredentialTest,
  DynamicServiceResponseOutputListener,
  DynamicServiceResponseOutputWebhook,
} from "..";

export type ActionReturnValue = Promise<DynamicServiceResponseOutput>;

export type UntypedActionReturnFunction = (
  body: DynamicServiceBodyWithLib
) => ActionReturnValue | ListenerReturnValue;
export type TypedActionReturnFunction<T> = (
  body: DynamicServiceBodyWithLib,
  config: T
) => ActionReturnValue | ListenerReturnValue;

export type ActionReturnFunction<T = any> =
  | UntypedActionReturnFunction
  | TypedActionReturnFunction<T>;

export type CredentialReturnValue =
  Promise<DynamicServiceResponseOutputCredentialAuthCallback>;

export type UntypedCredentialReturnFunction = (
  body: DynamicServiceBodyWithLib
) => CredentialReturnValue;
export type TypedCredentialReturnFunction<T> = (
  body: DynamicServiceBodyWithLib,
  config: T
) => CredentialReturnValue;

export type CredentialFormTransformFunction<T = any> = (
  body: DynamicServiceBodyWithLib
) => Partial<Credential>;

export type CredentialReturnFunction<T = any> =
  | UntypedCredentialReturnFunction
  | TypedCredentialReturnFunction<T>;

export type CredentialGenerateAuthURIReturnValue =
  Promise<DynamicServiceResponseOutputCredentialGenerateAuthURI>;

export type UntypedCredentialGenerateAuthURIFunction = (
  body: DynamicServiceBodyWithLib
) => CredentialGenerateAuthURIReturnValue;
export type TypedCredentialGenerateAuthURIFunction<T> = (
  body: DynamicServiceBodyWithLib,
  config: T
) => CredentialGenerateAuthURIReturnValue;

export declare type CredentialGenerateAuthURIFunction<T = any> =
  | UntypedCredentialGenerateAuthURIFunction
  | TypedCredentialGenerateAuthURIFunction<T>;

export type CredentialTestReturnValue =
  Promise<DynamicServiceResponseOutputCredentialTest>;

export type UntypedCredentialTestFunction = (
  body: DynamicServiceBodyWithLib
) => CredentialTestReturnValue;
export type TypedCredentialTestFunction<T> = (
  body: DynamicServiceBodyWithLib,
  config: T
) => CredentialTestReturnValue;

export declare type CredentialTestFunction<T = any> =
  | UntypedCredentialTestFunction
  | TypedCredentialTestFunction<T>;

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;

export type UntypedListenerReturnFunction = (
  body: DynamicServiceBodyWithLib
) => ListenerReturnValue;
export type TypedListenerReturnFunction<T> = (
  body: DynamicServiceBodyWithLib,
  config: T
) => ListenerReturnValue;

export type ListenerReturnFunction<T = any> =
  | UntypedListenerReturnFunction
  | TypedListenerReturnFunction<T>;

export type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;

export type UntypedWebhookReturnFunction = (
  body: DynamicServiceBodyWithLib
) => WebhookReturnValue;
export type TypedWebhookReturnFunction<T> = (
  body: DynamicServiceBodyWithLib,
  config: T
) => WebhookReturnValue;

export type WebhookReturnFunction<T = any> =
  | UntypedWebhookReturnFunction
  | TypedWebhookReturnFunction<T>;
