import { FieldItem } from "..";
export type PromptPolicySchemaType = "jsonSchema" | "fieldList";
export interface PromptPolicy {
    id: string;
    successMsg: string;
    allowEntities: string[];
    enableDownloads: boolean;
    enableUploads: boolean;
    publicInstances: boolean;
    requireAuth: boolean;
    restrictedRecipients: boolean;
    requireAllResponses: boolean;
    viewAfterSubmit: boolean;
    saveDataToContext: boolean;
    fields: FieldItem[];
    createdAt: string;
    updatedAt: string;
}
