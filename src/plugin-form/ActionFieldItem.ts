import { ActionFieldPrerequisite } from ".";

export interface ActionFieldItem {
  value: string;
  label: string;
  type?: string;
  options?:
    | ActionFieldOption[]
    | ((field: ActionFieldItem, props: any) => ActionFieldOption[]);
  link?: {
    text: string;
    href: string;
  };
  prerequisites?: ActionFieldPrerequisite[];
  category?: string;
  fromPropertyLabel?: string;
  transformValueLabel?: string;
  header?: string;
  defaultTransformation?: string;
  multiple?: boolean;
  self?: boolean;
  forPlatform?: string[];
  jsonSchemaForm?: {
    schema: any;
    uiSchema?: any;
  };
}

export interface ActionFieldOption {
  value: string | boolean;
  label: string;
  name?: string;
  avatar?: string;
  alt?: string;
}
