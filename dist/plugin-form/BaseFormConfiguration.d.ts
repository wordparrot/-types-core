export interface BaseFormConfiguration<T = string> {
    provider: T;
    name: string;
    description: string;
    type: string;
    logo?: string;
}
