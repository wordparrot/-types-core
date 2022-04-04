import { BaseFormConfiguration } from '.'
import { ActionInitialValues } from '.'
import { ActionValidationSchemaItem } from '.'
import { ActionFieldItem } from '.'

export interface ActionFormConfiguration extends BaseFormConfiguration {
    initialValues: ActionInitialValues
    validationSchema: ActionValidationSchemaItem[]
    fields: ActionFieldItem[]
}