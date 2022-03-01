import { FeaturedThread } from ".";
import { RepositoryItem } from "..";
export interface FeaturedThreadRelease {
    id?: string;
    featuredThreadId: string;
    featuredThread?: FeaturedThread;
    releaseNo: number;
    repositoryItems: RepositoryItem[];
    createdAt: string;
    updatedAt: string;
}
