import { FeaturedThread, FeaturedImage, FeaturedSubscription } from ".";
import { Profile } from "..";
import { Site } from '..';
import { User } from '..';
export interface FeaturedGroup {
    id: string;
    title: string;
    content?: string;
    body?: string;
    subscriptionScheme: string;
    itemLimit?: number;
    user: User;
    site: Site;
    profile: Profile;
    featuredImages: FeaturedImage[];
    featuredThreads: FeaturedThread[];
    featuredSubscriptions: FeaturedSubscription[];
    createdAt: string;
    updatedAt: string;
}
