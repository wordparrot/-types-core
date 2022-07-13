export interface PromptPolicy {
  id: string;
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
  uiSchema: any;

  createdAt: string;
  updatedAt: string;
}
