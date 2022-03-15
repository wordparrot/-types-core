import { RepositoryItem, FileMetadata, CsvMetadata } from "..";

export interface DynamicServiceBodyInput {
    itemsFromParent?: RepositoryItem[]
    filesFromParent?: FileMetadata[]
    tokensFromParent?: Record<string, any>[]
    csvFromParent?: CsvMetadata[]
    repositoryItems?: RepositoryItem[]
    repositoryItemIds?: string[]
    repositoryItemCount?: number
}