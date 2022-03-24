import { RepositoryFile, RepositoryItem } from ".."
import { CsvMetadata } from ".."
import { FileMetadata } from '..'
import { PipelineMessage } from ".."
import { PipelineToken } from ".."
import { BroadcastToFeaturedGroup } from ".."
import { BroadcastToFeaturedThread } from ".."
import { PushNotificationToFeaturedThread } from ".."

export interface DynamicServiceResponseOutputBase {
    message: string
    messageVars: Record<string, string | number>
    status: string
    errors: Record<string, any>
    pipelineCount: number
    csvToPassOn: CsvMetadata[]
    messagesToPassOn: PipelineMessage[]
    itemsToPassOn: RepositoryItem[]
    itemsDeleted: RepositoryItem[]
    jsonToPassOn: Record<string, any>[]
    jsonDeleted: Record<string, any>[]
    fileMetadataToPassOn: FileMetadata[]
    filesToPassOn: RepositoryFile[]
    filesDeleted: RepositoryFile[]
    tokensToPassOn: PipelineToken[]
    refreshTokenToSave: string
    
    repositoryId: string
    filesToRepository: string[]
    itemsToRepository: string[]
    
    conditionFailed: string[]
    broadcastToFeaturedGroups: BroadcastToFeaturedGroup[]
    broadcastToFeaturedThreads: BroadcastToFeaturedThread[]
    pushNotificationToGroups: PushNotificationToFeaturedThread[]
    
}

export type DynamicServiceResponseOutput = Partial<DynamicServiceResponseOutputBase>