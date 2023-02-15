import { Credential } from ".";
import { HubPlugin } from "..";

export interface CredentialQRCode {
  id: string;
  active: boolean;
  provider?: string;
  redirectURI?: string;
  redirectId?: string;
  plugin?: HubPlugin;
  credential: Credential;
  credentialId: string;

  createdAt: string;
  updatedAt: string;
}
