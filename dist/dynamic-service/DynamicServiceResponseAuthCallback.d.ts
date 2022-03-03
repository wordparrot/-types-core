export interface DynamicServiceResponseAuthCallbackBase {
    message: string;
    status?: string;
    accessToken?: string;
    refreshToken?: string;
    secret?: string;
}
export declare type DynamicServiceResponseAuthCallback = Partial<DynamicServiceResponseAuthCallbackBase>;
