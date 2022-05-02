import { BaseFormConfiguration } from ".";
import { CredentialInitialValues } from ".";
import { ActionValidationSchemaItem } from ".";
import { ActionFieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";
export interface CredentialFormConfiguration extends BaseFormConfiguration {
    initialValues: CredentialInitialValues;
    validationSchema: ActionValidationSchemaItem[];
    fields: ActionFieldItem[];
    test?: {
        name: string;
        description: string;
        initialValues: CredentialInitialValues;
        parameters?: DynamicServiceBodyParameters;
    }[];
    forPlatform?: string[];
}
