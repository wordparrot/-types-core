import { CredentialReturnFunction, CredentialGenerateAuthURIFunction, CredentialTestFunction } from "..";
export interface CredentialRegisterMethods {
    authCallback: CredentialReturnFunction;
    generateAuthURI?: CredentialGenerateAuthURIFunction;
    test?: CredentialTestFunction;
}
export interface CredentialRegisterValues {
    methods: CredentialRegisterMethods;
}
export interface CredentialRegisterItem<T = string> extends CredentialRegisterValues {
    provider: T;
}
export declare type CredentialRegister = <T = string>(credentialRegisterItemArray: CredentialRegisterItem<T>[]) => Record<string, CredentialRegisterValues>;
