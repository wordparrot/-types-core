import { Entry } from '.'

export interface EntryLink {
    id: string
    uniqId?: string
    title: string
    url: string
    status: string

    entry?: Entry

    createdAt: string
    updatedAt: string
}