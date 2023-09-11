import { FieldDescriptor } from "..";
import { DynamicFormFieldType, DynamicFormFieldStatus } from ".";
import { DynamicFormAbstractField } from ".";

export interface DynamicFormTextField extends DynamicFormAbstractField {
  type: "text";
}
