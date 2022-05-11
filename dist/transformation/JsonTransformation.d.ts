export interface JsonTransformation {
    transformType: string;
    fromProperty: string | null;
    allProperties?: boolean;
    transformValue: string;
    secondaryValue?: string;
    tertiaryValue?: string;
}
