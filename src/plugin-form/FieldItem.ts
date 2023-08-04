import { FieldPrerequisite } from ".";
import { FieldDescriptor } from ".";
import { FieldStatusMapItem } from "..";

export interface FieldItem {
  value: string;
  label: string;
  type?: string;
  options?: FieldOption[] | ((field: FieldItem, props: any) => FieldOption[]);
  allowList?: Record<string, any>[];
  blockList?: Record<string, any>[];
  descriptors?: FieldDescriptor[];
  link?: {
    text: string;
    href: string;
  };
  prerequisites?: FieldPrerequisite[];
  category?: string;
  fromPropertyLabel?: string;
  transformValueLabel?: string;
  header?: string;
  defaultTransformation?: string;
  multiple?: boolean;
  self?: boolean;
  readonly?: boolean;
  forPlatform?: string[];
  jsonSchemaForm?: {
    schema: any;
    uiSchema?: any;
  };
  hiddenFields?: FieldItem[];
  fieldStatus?: FieldStatusMapItem;
}

export interface FieldOption {
  value: string | boolean;
  label: string;
  name?: string;
  avatar?: string;
  alt?: string;
}
