import { User } from ".."
import { PipelineNode } from '..'
import { EntryItem } from '..'

export interface Credential {
    id: string
    title: string
    content: string
    provider: string
    platform: string
    projectName: string
    credentialName: string
    type: string
    status: string
    providerConfig: any
    clientId: string
    clientSecret: string
    username: string
    password: string
    refreshToken: string
    accessToken: string
    tokenSecret: string
    tokenExpiration: number
    tokenType: string
    scopes: string[]
    rootFolderId: string
    redirectURI: string
    hasAuthCallback: boolean
    hasAuthTest: boolean
    authResponse: string
    restrictions: string[]
    useServiceAccount: boolean
    default: boolean
    storage: any

    user: User
    nodes: PipelineNode[]
    entryItems: EntryItem[]

    createdAt: string
    updatedAt: string
}