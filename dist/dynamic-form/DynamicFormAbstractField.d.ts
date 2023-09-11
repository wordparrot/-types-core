import { DynamicFormFieldType, DynamicFormFieldStatus } from ".";
export interface DynamicFormAbstractField {
    displayTitle: string;
    displayContent: string;
    type: DynamicFormFieldType;
    fieldName: string;
    label: string;
    required: boolean;
    readonly: boolean;
    status: DynamicFormFieldStatus;
}
