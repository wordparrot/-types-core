import { Credential, BaseCredentialTerms } from '..';
export interface DynamicServiceBodyAuth extends Partial<BaseCredentialTerms> {
    userAgent?: string;
    credential?: Credential;
}
