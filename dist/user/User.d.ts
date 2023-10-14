import { Role } from "..";
import { Profile } from ".";
export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    password?: string;
    locale: string;
    locked: boolean;
    banned: boolean;
    profile: Profile;
    roleId: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
}
