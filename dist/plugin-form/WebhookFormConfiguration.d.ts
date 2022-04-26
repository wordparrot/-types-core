import { BaseFormConfiguration } from ".";
import { WebhookInitialValues } from ".";
import { ActionValidationSchemaItem } from ".";
import { ActionFieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";
export declare type WebhookMethod = "head" | "options" | "get" | "post" | "put" | "patch" | "delete";
export interface WebhookFormConfiguration extends BaseFormConfiguration {
    initialValues: WebhookInitialValues;
    validationSchema: ActionValidationSchemaItem[];
    fields: ActionFieldItem[];
    methods: WebhookMethod[];
    test?: {
        name: string;
        description: string;
        initialValues: WebhookInitialValues;
        parameters?: DynamicServiceBodyParameters;
        request: any;
    }[];
}
