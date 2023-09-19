import { DynamicFormFieldType, DynamicFormFieldStatus } from ".";

export interface DynamicFormAbstractField {
  displayTitle: string; // Converts to descriptor header at runtime
  displayContent: string; // Converts to descriptor tagline at runtime
  displayLink: string; // Link text when displayed in project/connected form main page
  displayButton: string; // Button text when saving dynamic form

  type: DynamicFormFieldType;

  fieldName: string;
  label: string;
  required: boolean;
  readonly: boolean;
  status: DynamicFormFieldStatus;
  defaultValue: string;
}
