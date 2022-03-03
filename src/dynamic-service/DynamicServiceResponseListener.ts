export interface DynamicServiceResponseListenerBase {
    message: string
    passEvent: boolean
}

export type DynamicServiceResponseListener = Partial<DynamicServiceResponseListenerBase>