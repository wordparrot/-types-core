import { Credential } from '..';
export interface DynamicServiceBodyAuth {
    username?: string;
    password?: string;
    accessToken?: string;
    refreshToken?: string;
    userAgent?: string;
    credential?: Credential;
}
