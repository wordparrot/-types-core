export interface Credential {
    id: string;
    title: string;
    content?: string;
    provider: string;
    platform?: string;
    type: string;
    status: string;
    providerConfig: any;
    clientId: string;
    clientSecret?: string;
    username?: string;
    password?: string;
    refreshToken?: string;
    accessToken?: string;
    tokenSecret?: string;
    tokenExpiration?: number;
    tokenType?: string;
    scopes: string[];
    rootFolderId: string;
    restrictions: string[];
    useServiceAccount: boolean;
    default: boolean;
    storage: any;
    createdAt: string;
    updatedAt: string;
}
