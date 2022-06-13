export interface BlueprintInstallation {
    id: string;
    title: string;
    name: string;
    author: string;
    version: string;
    status: string;
    data: any;
    createdAt: string;
    updatedAt: string;
}
export interface FormDataInnerValue {
    index: number;
    isValid: boolean;
    values: any;
}
export interface FormDataItem {
    title: string;
    type: "pipeline";
    inner: Record<string, FormDataInnerValue>;
    allReady: boolean;
}
export interface WebhookFormDataItem {
    title: string;
    type: "webhook";
    values: any;
    isValid: boolean;
}
export interface ListenerFormDataItem {
    title: string;
    type: "listener";
    values: any;
    isValid: boolean;
}
export interface FormDataItemToChange {
    title: string;
    index: number;
    innerValue: FormDataInnerValue;
    allReady: boolean;
}
export interface WebhookFormDataItemToChange {
    title: string;
    index: number;
    isValid: boolean;
    values: any;
}
export declare type ListenerFormDataItemToChange = WebhookFormDataItemToChange;
export declare type FormDataMap = Record<string, FormDataItem>;
export declare type WebhookFormDataMap = Record<string, WebhookFormDataItem>;
export declare type ListenerFormDataMap = Record<string, ListenerFormDataItem>;
export interface BlueprintInstallationToSave {
    blueprintInstallationId: string;
    blueprintTitle: string;
    hubPluginId?: string;
    data: {
        pipelines: FormDataMap;
        webhooks: WebhookFormDataMap;
        listeners: ListenerFormDataMap;
    };
}
