export declare type PromptPolicySchemaType = 'jsonSchema' | 'fieldList';
export interface PromptPolicy {
    id: string;
    enable: boolean;
    urlName: string;
    successMsg: string;
    enableDownloads: boolean;
    enableUploads: boolean;
    publicInstances: boolean;
    requireAuth: boolean;
    restrictedRecipients: boolean;
    requireAllResponses: boolean;
    viewAfterSubmit: boolean;
    saveDataToContext: boolean;
    schema: any;
    schemaType: PromptPolicySchemaType;
    uiSchema: any;
    createdAt: string;
    updatedAt: string;
}
