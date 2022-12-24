import { Pipeline } from "../pipeline";
import { Webhook } from "../webhook";
import { Listener } from "../listener";
import { Blueprint } from "./Blueprint";
import { PipelineGroup, Prompt } from "..";
import { FieldDescriptor } from "..";
export interface BlueprintInstallation {
    id: string;
    title: string;
    content: string;
    version: string;
    status: string;
    hubBlueprintVersionId: string;
    pack: BlueprintPack;
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
    createdAt: string;
    updatedAt: string;
}
export interface FormDataItem {
    id: string;
    title: string;
    content: string;
    type: string;
    requiredCredentials: string[] | null;
}
export interface OtherFormDataItem extends FormDataItem {
    values: any;
    isValid: boolean;
    descriptors?: FieldDescriptor[];
}
export interface PipelineFormDataInnerValue {
    index: number;
    isValid: boolean;
    values: any;
    descriptors?: FieldDescriptor[];
}
export interface PipelineFormDataItem extends FormDataItem {
    type: "pipeline";
    inner: Record<string, PipelineFormDataInnerValue>;
    allReady: boolean;
}
export interface WebhookFormDataItem extends OtherFormDataItem {
    type: "webhook";
}
export interface ListenerFormDataItem extends OtherFormDataItem {
    type: "listener";
}
export interface PromptFormDataItem extends OtherFormDataItem {
    type: "prompt";
}
export interface PipelineFormDataItemToChange {
    id: string;
    title: string;
    nodeTitle: string;
    index: number;
    innerValue: PipelineFormDataInnerValue;
    allReady: boolean;
}
export interface WebhookFormDataItemToChange extends OtherFormDataItem {
    id: string;
    title: string;
    index: number;
    isValid: boolean;
    values: any;
}
export declare type ListenerFormDataItemToChange = WebhookFormDataItemToChange;
export declare type FormDataMap = Record<string, OtherFormDataItem | PipelineFormDataItem>;
export declare type PipelineFormDataMap = Record<string, PipelineFormDataItem>;
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
        pipelines: PipelineFormDataMap;
        prompts: PromptFormDataMap;
        webhooks: WebhookFormDataMap;
        listeners: ListenerFormDataMap;
    };
}
