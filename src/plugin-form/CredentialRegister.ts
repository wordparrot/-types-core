import { CredentialReturnFunction, PluginModuleCredentialFactory } from "..";

export interface CredentialRegisterItem<T = string> {
  provider: T;
  methods: CredentialReturnFunction;
}

export type CredentialRegister = (
  credentialRegisterItemArray: CredentialRegisterItem[]
) => PluginModuleCredentialFactory;
