import { ActionFieldPrerequisite } from ".";
export interface ActionFieldItem {
    value: string;
    label: string;
    type?: string;
    options?: {
        value: string;
        label: string;
    }[];
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
}
