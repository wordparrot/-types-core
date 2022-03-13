import { User } from '..';
import { Entry } from '..';
import { Category, Subcategory } from '..';
import { Site } from '..';
import { Repository } from '..';
export declare type RoleType = 'default' | 'custom' | 'shareable';
export interface Role {
    id: string;
    title: string;
    content: string;
    type: string;
    order: number;
    authScheme: string;
    shortUrl: string;
    permissions: string[];
    site: Site;
    entries: Entry[];
    users: User[];
    __users__?: User[];
    categories: Category[];
    subcategories: Subcategory[];
    repositories: Repository[];
    date: number;
    createdAt: string;
    updatedAt: string;
}
