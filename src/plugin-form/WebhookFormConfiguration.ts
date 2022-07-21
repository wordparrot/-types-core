import { BaseFormConfiguration } from ".";
import { WebhookInitialValues } from ".";
import { ValidationSchemaItem } from ".";
import { FieldItem } from ".";
import { DynamicServiceBodyParameters } from "..";

export type WebhookMethod =
  | "head"
  | "options"
  | "get"
  | "post"
  | "put"
  | "patch"
  | "delete";

export interface WebhookFormConfiguration<T = string>
  extends BaseFormConfiguration<T> {
  initialValues: WebhookInitialValues<T>;
  validationSchema: ValidationSchemaItem[];
  fields: FieldItem[];
  methods: WebhookMethod[];
  test?: {
    name: string;
    description: string;
    initialValues: WebhookInitialValues<T>;
    parameters?: DynamicServiceBodyParameters;
    request: any;
  }[];
}
