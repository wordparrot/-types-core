import { FeaturedThread } from ".";
import { RepositoryItem } from "..";
export interface FeaturedThreadRelease {
    id: string;
    title: string;
    content?: string;
    trackingId: string;
    releaseNo: number;
    status: string;
    featuredThread: FeaturedThread;
    repositoryItems: RepositoryItem[];
    createdAt: string;
    updatedAt: string;
}
