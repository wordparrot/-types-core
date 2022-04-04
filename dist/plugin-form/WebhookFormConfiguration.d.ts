import { BaseFormConfiguration } from '.';
import { ActionInitialValues } from '.';
import { ActionValidationSchemaItem } from '.';
import { ActionFieldItem } from '.';
export interface WebhookFormConfiguration extends BaseFormConfiguration {
    initialValues: ActionInitialValues;
    validationSchema: ActionValidationSchemaItem[];
    fields: ActionFieldItem[];
}
