import { PluginValidationTerm } from ".";
export interface PluginListener {
    name: string;
    title: string;
    provider: string;
    description: string;
    type: string;
    initialValues: Record<string, string>;
    validationSchema: PluginValidationTerm[];
    fields: any[];
}
