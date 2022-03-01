import { EntryItem, EntryLink } from ".";
import { RepositoryItem } from "..";
import { Role } from '..';
import { Image } from "../image";
import { Site } from '../site'
import { Category, Subcategory } from "..";

export interface Entry {
    id?: string
    title: string
    subtitle?: string
    content?: string
    body?: string
    youtubeURL?: string
    imageId?: string
    image?: Image
    status: string
    tags?: string
    sites?: Site[]
    items: EntryItem[]
    links?: EntryLink[]
    category?: Category
    categoryId?: string
    subcategory?: Subcategory
    subcategoryId?: string
    repositoryItems?: RepositoryItem[]
    roles?: Role[]
    roleIds?: string[]
    bookmarks?: any[]
    date: number
    createdAt?: string
    updatedAt?: string
}