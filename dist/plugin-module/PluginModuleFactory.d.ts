import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseOutputAuthCallback, DynamicServiceResponseOutputListener, DynamicServiceResponseOutputWebhook } from "..";
import { SandboxLib } from "..";
export declare type ActionReturnValue = Promise<DynamicServiceResponseOutput>;
export declare type ActionReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => ActionReturnValue | ListenerReturnValue;
export declare type PluginModuleActionFactory = () => {
    [n: string]: {
        main: ActionReturnFunction;
    };
};
export declare type CredentialReturnValue = Promise<DynamicServiceResponseOutputAuthCallback>;
export declare type CredentialReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => CredentialReturnValue;
export declare type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: CredentialReturnFunction;
        test: CredentialReturnFunction;
    };
};
export declare type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;
export declare type ListenerReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => ListenerReturnValue;
export declare type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: ListenerReturnFunction;
    };
};
export declare type WebhookReturnValue = Promise<DynamicServiceResponseOutputWebhook>;
export declare type WebhookReturnFunction = (body: DynamicServiceBody, lib: SandboxLib) => WebhookReturnValue;
export declare type PluginModuleWebhookFactory = () => {
    [n: string]: {
        main: WebhookReturnFunction;
    };
};
