export interface PluginValidationTerm {
    property: string;
    type: string;
    of?: PluginValidationTerm[] | PluginValidationTerm;
    requirement: string;
    nullable?: boolean;
    min?: number;
    max?: number;
    matches?: any;
    lowercase?: boolean;
    uppercase?: boolean;
    integer?: boolean;
    moreThan?: number;
    lessThan?: number;
    positive?: boolean;
    negative?: boolean;
    round?: string;
}
