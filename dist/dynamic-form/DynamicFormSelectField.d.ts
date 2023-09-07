import { FieldDescriptor } from "..";
import { DynamicFormFieldType, DynamicFormFieldStatus } from ".";
export declare type AddOptionResponse = "image" | "upload";
export interface DynamicFormSelectFieldOption {
    label: string;
    description: string;
    value: string;
    imageId?: string;
    repositoryFileId?: string;
    addOptionResponse?: AddOptionResponse;
    status: DynamicFormFieldStatus;
}
export declare type DynamicFormSelectFieldEntity = 'image' | 'repositoryFile' | 'repositoryItem' | 'dataStore' | 'pipeline' | 'credential';
export interface DynamicFormSelectField {
    type: DynamicFormFieldType;
    entity?: DynamicFormSelectFieldEntity;
    readonly: boolean;
    fieldName: string;
    label: string;
    options: DynamicFormSelectFieldOption[];
    minOptions: number;
    maxOptions: number;
    required: boolean;
    descriptors: FieldDescriptor[];
    repositoryFileId?: string;
}
