import { ActionInitialValues, WebhookMethod } from ".";

export interface WebhookInitialValues extends ActionInitialValues {
    active: boolean
    route: string
    methods: WebhookMethod[]
}