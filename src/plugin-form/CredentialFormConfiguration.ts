import { BaseFormConfiguration } from ".";
import { CredentialInitialValues } from ".";
import { ValidationSchemaItem } from ".";
import { FieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";

export interface CredentialFormConfiguration extends BaseFormConfiguration {
  initialValues: CredentialInitialValues;
  validationSchema: ValidationSchemaItem[];
  fields: FieldItem[];
  test?: {
    name: string;
    description: string;
    initialValues: CredentialInitialValues;
    parameters?: DynamicServiceBodyParameters;
  }[];
  forPlatform?: string[];
}
