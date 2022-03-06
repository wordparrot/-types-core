import { RepositoryTag, RepositoryFile } from ".";

export interface RepositoryItem {
    id: string
    uniqId?: string
    nodeUniqId?: string
    collectionId?: string
    groupId?: string
    authorId?: string
    authorName?: string
    authorScreenName?: string
    __wpsf_?: boolean
    type: string
    subtype?: string
    provider: string
    platform: string
    format?: string
    title: string
    content?: string
    thumbnail?: string
    permalink?: string
    url?: string
    youtube?: string
    array?: string[]
    json?: any
    views?: number
    repositoryId?: string
    repositoryTags?: RepositoryTag[]
    repositoryFiles?: RepositoryFile[]
    language?: string
    location?: string
    rank?: string
    originalCreatedAt?: string
    createdAt?: string
    updatedAt?: string
}