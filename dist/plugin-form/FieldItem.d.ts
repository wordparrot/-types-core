import { FieldPrerequisite } from ".";
import { FieldDescriptor } from ".";
import { FieldStatusMapItem } from "..";
export declare type FieldItemType = 'text' | 'number' | 'custom' | 'conditional' | 'select' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'header' | 'subheader' | 'category' | 'subcategory' | 'credential' | 'pipeline' | 'featuredGroup' | 'featuredThread' | 'repository' | 'repositoryFiles' | 'repositoryTag' | 'user' | 'component' | 'space' | 'checkbox' | 'colorPicker' | 'wysiwyg' | 'date' | 'roles' | 'link' | 'selectionHandler' | 'selectionHandlerId' | 'platforms' | 'password' | 'timezone' | 'chart' | 'csv' | 'csvReport' | 'dataStore' | 'json-transformation' | 'jsonTransformation' | 'jsonSchemaForm' | 'jsonView' | 'hideFields' | 'prompt' | 'webhookRoute' | 'descriptors' | 'empty' | 'image' | 'listener' | 'webhook' | 'collection';
export interface FieldItem {
    value: string;
    label: string;
    type?: FieldItemType;
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
    collection?: FieldItem[];
}
export interface FieldOption {
    value: string | boolean;
    label: string;
    name?: string;
    avatar?: string;
    alt?: string;
}
