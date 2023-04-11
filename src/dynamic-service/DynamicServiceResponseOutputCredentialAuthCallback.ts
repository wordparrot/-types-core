import { DynamicServiceResponseOutput } from ".";
import { AuthCallbackStatus } from "..";
import { BaseCredentialTerms } from "..";

export interface DynamicServiceResponseOutputCredentialAuthCallback
  extends Partial<BaseCredentialTerms> {
  id?: string;
  status: AuthCallbackStatus;
  tokenExpiration?: number;
  expiresIn?: number;
}
