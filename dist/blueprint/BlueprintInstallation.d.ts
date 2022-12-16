import { Pipeline } from "../pipeline";
import { Webhook } from "../webhook";
import { Listener } from "../listener";
import { Blueprint } from "./Blueprint";
import { PipelineGroup, Prompt } from "..";
export interface BlueprintInstallation {
    id: string;
    title: string;
    name: string;
    author: string;
    version: string;
    status: string;
    data: any;
    blueprintId: string;
    blueprint: Blueprint;
    pipelineGroup: PipelineGroup;
    pipelineGroupId: string;
    pipelines: Pipeline[];
    listener: Listener;
    listenerId: string;
    webhook: Webhook;
    webhookId: string;
    prompt: Prompt;
    promptId: string;
    hubBlueprintMetaId: string;
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
export interface PromptFormDataItem {
    title: string;
    type: "prompt";
    values: any;
    isValid: boolean;
}
export interface FormDataItemToChange {
    title: string;
    nodeTitle: string;
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
export declare type PromptFormDataMap = Record<string, PromptFormDataItem>;
export declare type WebhookFormDataMap = Record<string, WebhookFormDataItem>;
export declare type ListenerFormDataMap = Record<string, ListenerFormDataItem>;
export interface BlueprintPack {
    blueprintId: string;
    blueprintInstallationId: string;
    hubBlueprintMetaId: string;
    hubBlueprintVersionId: string;
    pipelineGroupId: string;
    title: string;
    content: string;
    data: {
        pipelines: FormDataMap;
        prompts: PromptFormDataMap;
        webhooks: WebhookFormDataMap;
        listeners: ListenerFormDataMap;
    };
}
