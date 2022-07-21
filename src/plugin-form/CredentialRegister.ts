import { CredentialReturnFunction, PluginModuleCredentialFactory } from "..";

export interface CredentialRegisterItem<T = string> {
  provider: T;
  methods: {
    auth: CredentialReturnFunction;
    test: CredentialReturnFunction;
  };
}

export type CredentialRegister<T = string> = (
  credentialRegisterItemArray: CredentialRegisterItem<T>[]
) => PluginModuleCredentialFactory;
