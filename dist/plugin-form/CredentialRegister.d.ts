import { CredentialReturnFunction } from "..";
export interface CredentialRegisterMethods {
    authCallback: CredentialReturnFunction;
    test?: CredentialReturnFunction;
}
export interface CredentialRegisterValues {
    methods: CredentialRegisterMethods;
}
export interface CredentialRegisterItem<T = string> extends CredentialRegisterValues {
    provider: T;
}
export declare type CredentialRegister = <T = string>(credentialRegisterItemArray: CredentialRegisterItem<T>[]) => Record<string, CredentialRegisterValues>;
