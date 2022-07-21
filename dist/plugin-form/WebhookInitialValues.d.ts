import { InitialValues, WebhookMethod } from ".";
export interface WebhookInitialValues<T> extends InitialValues<T> {
    active: boolean;
    route: string;
    methods: WebhookMethod[];
}
