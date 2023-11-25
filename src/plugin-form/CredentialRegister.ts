import {
  CredentialReturnFunction,
  CredentialGenerateAuthURIFunction,
  CredentialTestFunction,
} from "..";

export interface CredentialRegisterMethods {
  authCallback: CredentialReturnFunction;
  generateAuthURI?: CredentialGenerateAuthURIFunction;
  test?: CredentialTestFunction;
}

export interface CredentialRegisterValues {
  methods: CredentialRegisterMethods;
}

export interface CredentialRegisterItem<T> extends CredentialRegisterValues {
  provider: T;
}

export type CredentialRegister<T> = Record<string, CredentialRegisterItem<T>>;

export type CredentialRegisterFactory = <T>(
  credentialRegisterItemArray: CredentialRegisterItem<T>[]
) => CredentialRegister<T>;

export type CredentialFactory<T = any> = CredentialRegister<T>;
