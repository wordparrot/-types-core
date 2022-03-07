import { Site } from '..';
import { User } from '..';
import { Entry } from '..';
import { Banner } from '..';
import { FeaturedImage } from '..';
export declare type ImageType = 'hosted' | 'external';
export interface Image {
    id: string;
    uniqId?: number;
    title?: string;
    subtitle?: string;
    url: string;
    size: number;
    height: number;
    width: number;
    order?: number;
    status: string;
    type: ImageType;
    site: Site;
    user: User;
    entries: Entry[];
    banners: Banner[];
    featuredImages: FeaturedImage[];
    createdAt?: string;
    updatedAt?: string;
}
