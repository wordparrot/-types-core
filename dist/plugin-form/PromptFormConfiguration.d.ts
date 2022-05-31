import { BaseFormConfiguration } from ".";
import { InitialValues } from ".";
import { ValidationSchemaItem } from ".";
import { FieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";
export interface PromptFormConfiguration extends BaseFormConfiguration {
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
