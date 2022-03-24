import { PipelineMessage } from ".."
import { FileMetadata } from ".."
import { RepositoryItem } from ".."
import { RepositoryFile } from ".."
import { PipelineToken } from ".."

export interface DynamicServiceBodyParameters {
    status: string
    recordReports: boolean

    messagesFromParent: PipelineMessage[]
    fileMetadataFromParent: FileMetadata[]
    filesFromParent: RepositoryFile[]
    itemsFromParent: RepositoryItem[]
    tokensFromParent: PipelineToken

    conditionFailedFromParent: string[]
    conditionFailed: string[]
}