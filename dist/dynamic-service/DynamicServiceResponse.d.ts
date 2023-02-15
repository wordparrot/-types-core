import { DynamicServiceResponseOutputListener, DynamicServiceResponseOutput, DynamicServiceResponseOutputAuthCallback, DynamicServiceResponseOutputWebhook } from ".";
export interface DynamicServiceResponseData {
    name?: string;
    type?: string;
    message?: string;
    isBatchProcess?: boolean;
    statusCode?: number;
    url?: string;
    error?: any;
    output: DynamicServiceResponseOutput;
    createdAt?: string;
}
export interface DynamicServiceResponse {
    result: boolean;
    data: DynamicServiceResponseData;
}
export interface DynamicServiceResponseDataListener extends Omit<DynamicServiceResponseData, "output"> {
    output: DynamicServiceResponseOutputListener;
}
export interface DynamicServiceResponseListener extends Omit<DynamicServiceResponse, "data"> {
    data: DynamicServiceResponseDataListener;
}
export interface DynamicServiceResponseDataAuthCallback extends Omit<DynamicServiceResponseData, "output"> {
    output: DynamicServiceResponseOutputAuthCallback;
}
export interface DynamicServiceResponseDataGenerateAuthURI extends Omit<DynamicServiceResponseData, "output"> {
    output: {
        authURI: string;
    };
}
export interface DynamicServiceResponseAuthCallback extends Omit<DynamicServiceResponse, "data"> {
    data: DynamicServiceResponseDataAuthCallback;
}
export interface DynamicServiceResponseDataWebhook extends Omit<DynamicServiceResponseData, "output"> {
    output: DynamicServiceResponseOutputWebhook;
}
export interface DynamicServiceResponseWebhook extends Omit<DynamicServiceResponse, "data"> {
    data: DynamicServiceResponseDataWebhook;
}
