import { RepositoryItem, RepositoryFile } from "..";
export interface DynamicServiceBodyInput {
    itemsFromParent?: RepositoryItem[];
    filesFromParent?: RepositoryFile[];
    tokensFromParent?: Record<string, any>[];
    repositoryItems?: RepositoryItem[];
    repositoryItemIds?: string[];
    repositoryItemCount?: number;
}
