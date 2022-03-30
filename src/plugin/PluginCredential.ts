import { PluginValidationTerm,  } from ".";

export interface PluginCredential {
    name: string
    title: string
    description: string
    actions: string[]
    initialValues: Record<string, string>
    validationSchema: PluginValidationTerm[]
    fields: any[]
}