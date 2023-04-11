import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseOutputAuthCallback, DynamicServiceResponseOutputListener, DynamicServiceResponseOutputWebhook } from "..";
import { SandboxLib } from "..";
export declare type ActionReturnValue = Promise<DynamicServiceResponseOutput>;
export declare type ActionReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => ActionReturnValue | ListenerReturnValue;
export declare type CredentialReturnValue = Promise<DynamicServiceResponseOutputAuthCallback>;
export declare type CredentialReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => CredentialReturnValue;
export declare type CredentialGenerateAuthURIReturnValue = Promise<{
    authURI: string;
}>;
export declare type CredentialGenerateAuthURIFunction = (body: DynamicServiceBody, lib: SandboxLib) => CredentialGenerateAuthURIReturnValue;
export declare type CredentialTestReturnValue = Promise<{
    valid: boolean;
}>;
export declare type CredentialTestFunction = (body: DynamicServiceBody, lib: SandboxLib) => CredentialTestReturnValue;
export declare type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;
export declare type ListenerReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => ListenerReturnValue;
export declare type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;
export declare type WebhookReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => WebhookReturnValue;
