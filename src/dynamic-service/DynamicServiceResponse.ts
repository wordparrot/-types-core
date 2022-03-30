import { DynamicServiceResponseOutputListener, DynamicServiceResponseOutput, DynamicServiceResponseOutputAuthCallback } from ".";

export interface DynamicServiceResponseData {
    name?: string
    type?: string
    message?: string
    statusCode?: number
    url?: string
    error?: any
    output: DynamicServiceResponseOutput
    createdAt?: string
}

export interface DynamicServiceResponse {
    result: boolean
    data: DynamicServiceResponseData
}

export interface DynamicServiceResponseDataListener extends Omit<DynamicServiceResponseData, 'output'> {
    output: DynamicServiceResponseOutputListener
}

export interface DynamicServiceResponseListener extends Omit<DynamicServiceResponse, 'data'> {
    data: DynamicServiceResponseDataListener
}

export interface DynamicServiceResponseDataAuthCallback extends Omit<DynamicServiceResponseData, 'output'> {
    output: DynamicServiceResponseOutputAuthCallback
}

export interface DynamicServiceResponseAuthCallback extends Omit<DynamicServiceResponse, 'data'> {
    data: DynamicServiceResponseDataAuthCallback
}

