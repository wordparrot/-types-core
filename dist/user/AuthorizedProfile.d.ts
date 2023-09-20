import { Role, JwtConfig } from '..';
export interface AuthorizedProfile extends JwtConfig {
    name: string;
    timezone: string;
    permissions: string[];
    roles: Role[];
    profile?: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
}
