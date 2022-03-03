import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseAuthCallback, DynamicServiceResponseListener } from "..";
export declare type ActionReturnValue = Promise<DynamicServiceResponseOutput>;
export declare type PluginModuleActionFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => ActionReturnValue;
    };
};
export declare type CredentialReturnValue = Promise<DynamicServiceResponseAuthCallback>;
export declare type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: (body: DynamicServiceBody, lib: any) => CredentialReturnValue;
        test: (body: DynamicServiceBody, lib: any) => CredentialReturnValue;
    };
};
export declare type ListenerReturnValue = Promise<DynamicServiceResponseListener>;
export declare type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => ListenerReturnValue;
    };
};
