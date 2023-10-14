import { Subcategory, CategoryMeta } from ".";
export interface Category {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    order: number;
    subcategories?: Subcategory[];
    slug: string;
    categoryMeta?: CategoryMeta;
}
