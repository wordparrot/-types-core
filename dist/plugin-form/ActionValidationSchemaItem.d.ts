export interface ActionValidationSchemaItem {
    property: string;
    type: string;
    requirement: 'required' | 'optional' | true | false;
}
