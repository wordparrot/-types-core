export interface JsonTransformation {
    transformType: string;
    allProperties?: boolean;
    primary: string | null;
    secondary?: string;
    tertiary?: string;
    quaternary?: string;
}
