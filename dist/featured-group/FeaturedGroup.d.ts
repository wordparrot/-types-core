import { FeaturedThread, FeaturedImage, FeaturedSubscription } from ".";
import { Profile } from "..";
export interface FeaturedGroup {
    id: string;
    title: string;
    content?: string;
    subscriptionScheme: string;
    itemLimit?: number;
    featuredImages?: FeaturedImage[];
    featuredThreads?: FeaturedThread[];
    userId: string;
    profile?: Profile;
    featuredSubscriptions: FeaturedSubscription[];
    startedAt: number;
    endedAt: number;
    createdAt?: string;
    updatedAt?: string;
}
