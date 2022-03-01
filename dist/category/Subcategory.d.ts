import { CategoryMeta, Category } from ".";
import { Role } from '..';
export interface Subcategory {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    order: number;
    category: Category;
    roles: Role[];
    slug: string;
    categoryMeta?: CategoryMeta;
}
