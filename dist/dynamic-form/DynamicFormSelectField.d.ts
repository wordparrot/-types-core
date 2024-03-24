import { DynamicFormFieldStatus } from ".";
import { DynamicFormAbstractField } from ".";
export type AddOptionResponse = "image" | "upload";
export interface DynamicFormSelectFieldOption {
    label: string;
    description: string;
    value: string;
    imageId?: string;
    repositoryFileId?: string;
    url?: string;
    addOptionResponse?: AddOptionResponse;
    status: DynamicFormFieldStatus;
}
export type DynamicFormSelectFieldEntity = "image" | "repositoryFile";
export interface DynamicFormSelectField extends DynamicFormAbstractField {
    type: "select";
    entity?: DynamicFormSelectFieldEntity;
    options: DynamicFormSelectFieldOption[];
    minOptions: number;
    maxOptions: number;
    buttonText?: string;
}
