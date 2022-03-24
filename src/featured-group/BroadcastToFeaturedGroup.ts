import { RepositoryItem } from ".."

export interface BroadcastToFeaturedGroup {
    featuredGroupId: string
    featuredGroupTitle: string
    featuredThreads: {
      featuredThreadTitle: string
      featuredThreadId: string
      repositoryItems: RepositoryItem[]
    }[]
}