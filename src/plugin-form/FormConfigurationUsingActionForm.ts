import { BaseFormConfiguration } from ".";

export interface FormConfigurationUsingActionForm<T = any>
  extends BaseFormConfiguration<T> {
  useActionProvider: string;
}
