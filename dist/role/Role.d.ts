import { User } from '../user';
import { Entry } from '..';
import { Category, Subcategory } from '..';
export declare type RoleType = 'default' | 'custom' | 'shareable';
export interface Role {
    id: string;
    title: string;
    content?: string;
    type: string;
    order: number;
    authScheme: string;
    permissions: string[];
    date: number;
    createdAt: string;
    updatedAt: string;
    entries?: Entry[];
    categories?: Category[];
    subcategories?: Subcategory[];
    users?: User[];
    __users__?: User[];
}
