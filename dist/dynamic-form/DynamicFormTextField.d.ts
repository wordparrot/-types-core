import { FieldDescriptor } from "..";
import { DynamicFormFieldType, DynamicFormFieldStatus } from ".";
export interface DynamicFormTextField {
    type: DynamicFormFieldType;
    fieldName: string;
    label: string;
    value: string;
    required: boolean;
    descriptors: FieldDescriptor[];
    status: DynamicFormFieldStatus;
}
