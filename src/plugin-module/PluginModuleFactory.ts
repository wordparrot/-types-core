import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseAuthCallback, DynamicServiceResponseListener } from ".."

export type PluginModuleActionFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseOutput>
    }
}

export type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseAuthCallback>
        test: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseAuthCallback>
    }
}

export type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => Promise<DynamicServiceResponseListener>
    }
}