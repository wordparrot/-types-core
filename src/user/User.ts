import { Role } from "..";
import { Profile } from ".";

export interface User {
    id: string
    name: string
    email: string
    emailVerified: boolean
    password?: string
    locale: string
    roles: Role[]
    locked: boolean
    banned: boolean
    profile: Profile
    createdAt: string
    updatedAt: string
}