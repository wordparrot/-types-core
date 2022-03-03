import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseAuthCallback, DynamicServiceResponseListener } from "..";
export declare type PluginModuleActionFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseOutput>;
    };
};
export declare type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseAuthCallback>;
        test: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseAuthCallback>;
    };
};
export declare type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseListener>;
    };
};
