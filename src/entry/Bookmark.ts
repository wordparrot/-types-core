import { Site } from '..'
import { Entry } from '..'
import { User } from '..'

export interface Bookmark {
    id: string
    repositoryItemId: string
    site: Site
    entry: Entry
    user: User
    createdAt: string
    updatedAt: string
}