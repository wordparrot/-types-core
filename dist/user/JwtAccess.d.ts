import { JwtConfig } from '.';
import { ACL } from '.';
export interface JwtAccess extends JwtConfig {
    acl: ACL[];
}
