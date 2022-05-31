import { BaseFormConfiguration } from ".";
import { InitialValues } from ".";
import { ValidationSchemaItem } from ".";
import { FieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";
import { DynamicServiceBodyAuth } from "..";

export interface ActionFormConfiguration extends BaseFormConfiguration {
  initialValues: InitialValues;
  validationSchema: ValidationSchemaItem[];
  fields: FieldItem[];
  test?: {
    name: string;
    description: string;
    initialValues: InitialValues;
    parameters?: DynamicServiceBodyParameters;
  }[];
}
