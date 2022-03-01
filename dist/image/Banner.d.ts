import { Image } from '.';
export interface Banner {
    id?: string;
    type: string;
    order: number;
    image: Image;
    siteId?: string;
    categoryId?: string;
    subcategoryId?: string;
}
