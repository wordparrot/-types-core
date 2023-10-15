import { Role } from "..";
import { Profile } from ".";
export declare type UserStatus = 'verify' | 'ok' | 'locked' | 'banned' | 'deleted';
export interface User {
    id: string;
    name: string;
    email: string;
    status: UserStatus;
    password?: string;
    locale: string;
    profile: Profile;
    roleId: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
}
