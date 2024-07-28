import { BaseFormConfiguration } from ".";
import { CredentialInitialValues } from ".";
import { ValidationSchemaItem } from ".";
import { FieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";

export interface CredentialFormConfiguration<T = string>
  extends BaseFormConfiguration<T> {
  initialValues: CredentialInitialValues<T>;
  fields: FieldItem[];
  test?: {
    name: string;
    description: string;
    initialValues: CredentialInitialValues<T>;
    parameters?: DynamicServiceBodyParameters;
  }[];
  forPlatform?: string[];
  validationSchema?: ValidationSchemaItem[];
}
