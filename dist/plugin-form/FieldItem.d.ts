import { FieldPrerequisite } from ".";
export interface FieldItem {
    value: string;
    label: string;
    type?: string;
    options?: FieldOption[] | ((field: FieldItem, props: any) => FieldOption[]);
    link?: {
        text: string;
        href: string;
    };
    displayPanel?: number;
    prerequisites?: FieldPrerequisite[];
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
    hiddenFields?: FieldItem[];
}
export interface FieldOption {
    value: string | boolean;
    label: string;
    name?: string;
    avatar?: string;
    alt?: string;
}
