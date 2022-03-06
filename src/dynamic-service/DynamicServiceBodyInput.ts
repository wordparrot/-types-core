import { RepositoryItem, FileMetadata } from "..";

export interface DynamicServiceBodyInput {
    itemsFromParent?: RepositoryItem[]
    filesFromParent?: FileMetadata[]
    tokensFromParent?: Record<string, any>[]
    repositoryItems?: RepositoryItem[]
    repositoryItemIds?: string[]
    repositoryItemCount?: number
}