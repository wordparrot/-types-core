import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseAuthCallback, DynamicServiceResponseListener } from ".."

export type ActionReturnValue = Promise<DynamicServiceResponseOutput>

export type PluginModuleActionFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => ActionReturnValue
    }
}

export type CredentialReturnValue = Promise<DynamicServiceResponseAuthCallback>

export type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: (body: DynamicServiceBody, lib: any) => CredentialReturnValue
        test: (body: DynamicServiceBody, lib: any) => CredentialReturnValue
    }
}

export type ListenerReturnValue = Promise<DynamicServiceResponseListener>

export type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: (body: DynamicServiceBody, lib: any) => ListenerReturnValue
    }
}