import { PluginValidationTerm } from ".";
export interface PluginAction {
    name: string;
    title: string;
    description: string;
    type: string;
    initialValues: Record<string, string>;
    validationSchema: PluginValidationTerm[];
    fields: unknown[];
}
