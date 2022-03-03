export interface DynamicServiceResponseListenerBase {
    message: string;
    passEvent: boolean;
}
export declare type DynamicServiceResponseListener = Partial<DynamicServiceResponseListenerBase>;
