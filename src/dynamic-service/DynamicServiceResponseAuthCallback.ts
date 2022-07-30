import { DynamicServiceResponseOutput } from ".";
import { AuthCallbackStatus } from "..";

export interface DynamicServiceResponseOutputAuthCallback
  extends DynamicServiceResponseOutput {
  accessToken?: string;
  refreshToken?: string;
  authType?: string;
  tokenType?: string;
  id?: string;
  secret?: string;
  username?: string;
  password?: string;
  expiresAt?: string;
  timestamp?: number;
  status: AuthCallbackStatus;
}
