import { DynamicServiceResponseOutput } from ".";

export enum DynamicServiceResponseOutputAuthCallbackStatus {
  UNVERIFIED = "unverified",
  VALID = "valid",
  INVALID = "invalid",
  EXPIRED = "expired",
  REVOKED = "revoked",
}

export interface DynamicServiceResponseOutputAuthCallback
  extends DynamicServiceResponseOutput {
  accessToken?: string;
  refreshToken?: string;
  secret?: string;
  expiresAt?: string;
  status: DynamicServiceResponseOutputAuthCallbackStatus;
}
