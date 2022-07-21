import { BaseFormConfiguration } from ".";
import { InitialValues } from ".";
import { ValidationSchemaItem } from ".";
import { FieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";

export interface ListenerFormConfiguration<T = string>
  extends BaseFormConfiguration {
  initialValues: InitialValues<T>;
  validationSchema: ValidationSchemaItem[];
  fields: FieldItem[];
  test?: {
    name: string;
    description: string;
    initialValues: InitialValues<T>;
    parameters?: DynamicServiceBodyParameters;
  }[];
}
