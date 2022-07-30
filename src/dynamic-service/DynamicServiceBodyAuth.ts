import { Credential, BaseCredentialTerms, AuthCallbackStatus } from "..";

export interface DynamicServiceBodyAuth extends Partial<BaseCredentialTerms> {
  userAgent?: string;
  credential?: Credential;
}
