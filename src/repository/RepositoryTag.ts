import { RepositoryItem } from ".";

export interface RepositoryTag {
    id: string
    title: string
    color: string
    repositoryItems?: RepositoryItem[]
}