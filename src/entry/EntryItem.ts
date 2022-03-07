import { Credential } from '..'
import { Entry, EntryItemDownload } from '.'

export interface EntryItem {
    id: string
    type: string
    url: string
    corsDisabled: boolean
    credentialId?: string
    fileId: string
    folderId: string
    filename?: string
    format?: string
    language?: string
    size?: number
    downloads?: number
    status: string
    statusNotification?: string
    title: string

    entry: Entry
    credential: Credential
    downloadEntities: EntryItemDownload[]
    
    createdAt?: string
    updatedAt?: string
}