import { BaseFormConfiguration } from ".";
import { CredentialInitialValues } from ".";
import { ActionValidationSchemaItem } from ".";
import { ActionFieldItem } from ".";
export interface CredentialFormConfiguration extends BaseFormConfiguration {
    initialValues: CredentialInitialValues;
    validationSchema: ActionValidationSchemaItem[];
    fields: ActionFieldItem[];
}
