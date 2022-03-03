export interface DynamicServiceResponseAuthCallbackBase {
    message: string
    status?: string
    accessToken?: string
    refreshToken?: string
    secret?: string
}

export type DynamicServiceResponseAuthCallback = Partial<DynamicServiceResponseAuthCallbackBase>