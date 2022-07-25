import { DynamicServiceResponseOutput, AuthCallbackStatus } from ".";
export interface DynamicServiceResponseOutputAuthCallback extends DynamicServiceResponseOutput {
    accessToken?: string;
    refreshToken?: string;
    secret?: string;
    expiresAt?: string;
    status: AuthCallbackStatus;
}
