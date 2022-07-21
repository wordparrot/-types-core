import { CredentialReturnFunction, PluginModuleCredentialFactory } from "..";
export interface CredentialRegisterItem<T = string> {
    provider: T;
    methods: {
        auth: CredentialReturnFunction;
        test: CredentialReturnFunction;
    };
}
export declare type CredentialRegister = (credentialRegisterItemArray: CredentialRegisterItem[]) => PluginModuleCredentialFactory;
