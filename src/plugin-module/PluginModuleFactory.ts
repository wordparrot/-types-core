import { 
    DynamicServiceBody, 
    DynamicServiceResponseOutput, 
    DynamicServiceResponseOutputAuthCallback, 
    DynamicServiceResponseOutputListener 
} from "..";
import { SandboxLib } from ".."

export type ActionReturnValue = Promise<DynamicServiceResponseOutput>

export type PluginModuleActionFactory = () => {
    [n: string]: {
        main: (body?: DynamicServiceBody, lib?: SandboxLib) => ActionReturnValue
    }
}

export type CredentialReturnValue = Promise<DynamicServiceResponseOutputAuthCallback>

export type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: (body?: DynamicServiceBody, lib?: SandboxLib) => CredentialReturnValue
        test: (body?: DynamicServiceBody, lib?: SandboxLib) => CredentialReturnValue
    }
}

export type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>

export type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: (body?: DynamicServiceBody, lib?: SandboxLib) => ListenerReturnValue
    }
}