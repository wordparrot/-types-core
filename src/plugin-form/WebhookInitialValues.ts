import { InitialValues, WebhookMethod } from ".";

export interface WebhookInitialValues extends InitialValues {
  active: boolean;
  route: string;
  methods: WebhookMethod[];
}
