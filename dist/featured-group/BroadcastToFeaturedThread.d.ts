import { RepositoryItem } from "..";
export interface BroadcastToFeaturedThread {
    featuredThreadTitle: string;
    featuredThreadId: string;
    repositoryItems: RepositoryItem[];
}
