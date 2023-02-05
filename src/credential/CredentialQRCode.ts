import { Credential } from ".";
import { HubPlugin } from "..";

export interface CredentialQRCode {
  id: string;
  active: boolean;
  redirectURI?: string;
  redirectId?: string;
  plugin?: HubPlugin;
  credential: Credential;
  credentialId: string;

  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}
