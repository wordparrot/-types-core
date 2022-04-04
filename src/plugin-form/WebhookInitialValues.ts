import { ActionInitialValues } from ".";

export interface WebhookInitialValues extends ActionInitialValues {
    route: string
    methods: ('get' | 'post' | 'put' | 'patch' | 'delete')[]
}