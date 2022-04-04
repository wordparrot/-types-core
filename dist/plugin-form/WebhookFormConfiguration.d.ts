import { BaseFormConfiguration } from '.';
import { WebhookInitialValues } from '.';
import { ActionValidationSchemaItem } from '.';
import { ActionFieldItem } from '.';
export interface WebhookFormConfiguration extends BaseFormConfiguration {
    initialValues: WebhookInitialValues;
    validationSchema: ActionValidationSchemaItem[];
    fields: ActionFieldItem[];
}
