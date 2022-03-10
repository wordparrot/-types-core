import { RepositoryTag, RepositoryItem } from ".";
import { Tile } from '..'
import { Role } from '..'
import { Site } from '..'
import { User } from '..'
import { Pipeline } from '..'

export interface Repository {
    id: string
    title: string
    content: string
    
    pipelines: Pipeline[]
    repositoryTags: RepositoryTag[]
    repositoryItems: RepositoryItem[]
    tiles: Tile[]
    roles: Role[]
    site: Site
    user: User

    createdAt: string
    updatedAt: string
}