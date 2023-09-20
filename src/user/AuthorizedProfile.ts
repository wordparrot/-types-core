import { Role, JwtAccess, Profile } from "..";

export interface AuthorizedProfile extends JwtAccess {
  name: string;
  timezone: string;

  hubProjectId: string;

  domains: string[];
  roles?: Role[];

  profile?: Profile;
  createdAt?: string;
  updatedAt?: string;
}
