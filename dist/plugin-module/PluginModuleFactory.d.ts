import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseOutputAuthCallback, DynamicServiceResponseOutputListener } from "..";
import { SandboxLib } from "..";
export declare type ActionReturnValue = Promise<DynamicServiceResponseOutput>;
export declare type PluginModuleActionFactory = () => {
    [n: string]: {
        main: (body?: DynamicServiceBody, lib?: SandboxLib) => ActionReturnValue;
    };
};
export declare type CredentialReturnValue = Promise<DynamicServiceResponseOutputAuthCallback>;
export declare type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: (body?: DynamicServiceBody, lib?: SandboxLib) => CredentialReturnValue;
        test: (body?: DynamicServiceBody, lib?: SandboxLib) => CredentialReturnValue;
    };
};
export declare type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;
export declare type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: (body?: DynamicServiceBody, lib?: SandboxLib) => ListenerReturnValue;
    };
};
