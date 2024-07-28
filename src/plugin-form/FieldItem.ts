import { FieldPrerequisite } from ".";
import { FieldDescriptor } from ".";
import { FieldStatusMapItem } from "..";
import { ValidationSchemaItem } from ".";

export type FieldItemType =
  | "text"
  | "number"
  | "custom"
  | "conditional"
  | "select"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "header"
  | "subheader"
  | "category"
  | "subcategory"
  | "credential"
  | "pipeline"
  | "featuredGroup"
  | "featuredThread"
  | "repository"
  | "repositoryFiles"
  | "repositoryTag"
  | "user"
  | "component"
  | "space"
  | "checkbox"
  | "colorPicker"
  | "wysiwyg"
  | "date"
  | "roles"
  | "link"
  | "selectionHandler"
  | "selectionHandlerId"
  | "platforms"
  | "password"
  | "timezone"
  | "chart"
  | "csv"
  | "csvReport"
  | "dataStore"
  | "json-transformation"
  | "jsonTransformation"
  | "jsonSchemaForm"
  | "jsonView"
  | "hideFields"
  | "prompt"
  | "webhookRoute"
  | "descriptors"
  | "empty"
  | "image"
  | "listener"
  | "webhook"
  | "collection";

export interface FieldItem {
  // The value to be input in the form.
  value: string;
  // Label to be shown on the ihput.
  label: string;
  // Governs how an input will be rendered. For example, 'images', will render a select menu containing searchable set of images.
  type?: FieldItemType;
  // Option values for a select dropdown. Adding this property will automatically convert the input to a select menu type.
  options?: FieldOption[] | ((field: FieldItem, props: any) => FieldOption[]);
  // Forces the FormikSelect component to attempt to look up corresponding images in the media gallery, if the value is a uuid.
  optionsHaveImage?: boolean;
  // Descriptors allow one or more preceding blocks of text to be rendered in different styles above the input.
  // Examples include header, tagline, link, and even youtube video.
  descriptors?: FieldDescriptor[];
  // Enable users to provide a nested schema of input values, adding that schema to an array at runtime.
  collection?: FieldItem[];

  allowList?: Record<string, any>[];
  blockList?: Record<string, any>[];

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
  validation: ValidationSchemaItem;
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
