import { DynamicServiceResponseOutput } from ".";

export interface DynamicServiceResponseOutputAuthCallback extends DynamicServiceResponseOutput {
    accessToken?: string
    refreshToken?: string
    secret?: string
}