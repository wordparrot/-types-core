import { Image } from '..';
import { FeaturedGroup } from '..';
export interface FeaturedImage {
    id: string;
    order: number;
    image: Image;
    featuredGroup?: FeaturedGroup;
    createdAt: string;
    updatedAt: string;
}
