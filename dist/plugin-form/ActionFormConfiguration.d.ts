import { BaseFormConfiguration } from ".";
import { InitialValues } from ".";
import { ValidationSchemaItem } from ".";
import { FieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";
export interface ActionFormConfiguration<T = string> extends BaseFormConfiguration<T> {
    initialValues: InitialValues<T>;
    validationSchema: ValidationSchemaItem[];
    fields: FieldItem[];
    isBatchProcess?: boolean;
    test?: {
        name: string;
        description: string;
        initialValues: InitialValues<T>;
        parameters?: DynamicServiceBodyParameters;
    }[];
}
