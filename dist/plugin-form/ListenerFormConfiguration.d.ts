import { BaseFormConfiguration } from ".";
import { ActionInitialValues } from ".";
import { ActionValidationSchemaItem } from ".";
import { ActionFieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";
export interface ListenerFormConfiguration extends BaseFormConfiguration {
    initialValues: ActionInitialValues;
    validationSchema: ActionValidationSchemaItem[];
    fields: ActionFieldItem[];
    test?: {
        name: string;
        description: string;
        initialValues: ActionInitialValues;
        parameters?: DynamicServiceBodyParameters;
    }[];
}
