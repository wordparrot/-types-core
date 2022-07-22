import { CredentialReturnFunction } from "..";
export interface CredentialReturnMethods {
    authCallback: CredentialReturnFunction;
    test: CredentialReturnFunction;
}
export interface CredentialRegisterItem<T = string> {
    provider: T;
    methods: CredentialReturnMethods;
}
export declare type CredentialRegister = <T = string>(credentialRegisterItemArray: CredentialRegisterItem<T>[]) => Record<string, CredentialReturnMethods>;
