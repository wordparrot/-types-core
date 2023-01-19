export interface ValidationSchemaItem {
    property: string;
    type: string;
    requirement: "required" | "optional" | true | false;
    of?: ValidationSchemaItem[] | ValidationSchemaItem;
    nullable?: boolean;
    min?: number;
    max?: number;
    matches?: {
        regex: string;
        error: string;
    };
    lowercase?: boolean;
    uppercase?: boolean;
    integer?: boolean;
    moreThan?: number;
    lessThan?: number;
    positive?: boolean;
    negative?: boolean;
    round?: string;
}
