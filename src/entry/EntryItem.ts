export interface EntryItem {
    id?: string
    corsDisabled: boolean
    credentialId?: string
    credential?: Credential
    downloads?: number
    fileId: string
    folderId: string
    filename?: string
    format?: string
    language?: string
    size?: number
    status: string
    statusNotification?: string
    title: string
    type: string
    url?: string
    createdAt?: string
    updatedAt?: string
}