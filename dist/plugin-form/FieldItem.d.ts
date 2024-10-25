import { FieldPrerequisite } from ".";
import { FieldDescriptor } from ".";
import { FieldStatusMapItem } from "..";
import { ValidationSchemaItem } from ".";
export type FieldItemType = "text" | "number" | "custom" | "conditional" | "select" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "header" | "subheader" | "category" | "subcategory" | "credential" | "pipeline" | "featuredGroup" | "featuredThread" | "repository" | "repositoryFiles" | "repositoryTag" | "user" | "component" | "space" | "checkbox" | "colorPicker" | "wysiwyg" | "date" | "roles" | "link" | "selectionHandler" | "selectionHandlerId" | "platforms" | "password" | "timezone" | "chart" | "csv" | "csvReport" | "dataStore" | "json-transformation" | "jsonTransformation" | "jsonSchemaForm" | "jsonView" | "hideFields" | "prompt" | "webhookRoute" | "descriptors" | "empty" | "image" | "listener" | "webhook" | "collection" | "markdown" | "dataValidator";
export interface FieldItem {
    value: string;
    defaultValue?: string;
    label: string;
    type?: FieldItemType;
    options?: FieldOption[] | ((field: FieldItem, props: any) => FieldOption[]);
    optionsHaveImage?: boolean;
    descriptors?: FieldDescriptor[];
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
    validation?: ValidationSchemaItem;
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
