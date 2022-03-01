import { RepositoryTag } from ".";

export interface RepositoryFile {
    id: string
    nodeUniqId?: string
    type: string
    provider: string
    platform: string
    format: string
    uniqId: string
    title: string
    content?: string
    filename?: string
    permalink?: string
    url?: string
    repositoryId?: string
    repositoryTags?: RepositoryTag[]
    language?: string
    createdAt?: string
    updatedAt?: string
}