export interface ActionValidationSchemaItem {
    property: string;
    type: string;
    requirement: 'required' | 'optional' | true | false;
    of?: ActionValidationSchemaItem[] | ActionValidationSchemaItem;
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
