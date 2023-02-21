import { DynamicServiceResponseOutput } from ".";
import { AuthCallbackStatus } from "..";
import { BaseCredentialTerms } from "..";

export interface DynamicServiceResponseOutputAuthCallback
  extends Partial<BaseCredentialTerms> {
  id?: string;
  status: AuthCallbackStatus;
  tokenExpiration?: number;
  expiresIn?: number;
}
