import { DynamicFormFieldType, DynamicFormFieldStatus } from ".";

export interface DynamicFormAbstractField {
  displayTitle: string; // Converts to descriptor header at runtime
  displayContent: string; // Converts to descriptor tagline at runtime

  type: DynamicFormFieldType;

  fieldName: string;
  label: string;
  required: boolean;
  readonly: boolean;
  status: DynamicFormFieldStatus;
}
