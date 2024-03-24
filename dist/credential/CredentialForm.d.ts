import { Credential } from ".";
export type CredentialFormStatus = "pending" | "submitted" | "rejected";
export interface CredentialForm {
    id: string;
    provider: string;
    active: boolean;
    status: CredentialFormStatus;
    key: string;
    formValues: Partial<Credential>;
    name: string;
    userId: string;
    email: string;
    credential: Credential;
    credentialId: string;
    createdAt: string;
    updatedAt: string;
}
