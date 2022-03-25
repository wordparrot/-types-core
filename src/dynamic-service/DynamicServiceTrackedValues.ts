import { PipelineMessage } from ".."
import { FileMetadata } from ".."
import { RepositoryItem } from ".."
import { RepositoryFile } from ".."
import { PipelineToken } from ".."
import { CsvMetadata } from ".."

export interface DynamicServiceTrackedValues {
    csvToPassOn: CsvMetadata[]
    messagesToPassOn: PipelineMessage[]
    itemsToPassOn: RepositoryItem[]
    itemsDeleted: RepositoryItem[]
    jsonToPassOn: Record<string, any>[]
    jsonDeleted: Record<string, any>[]
    fileMetadataToPassOn: FileMetadata[]
    filesToPassOn: RepositoryFile[]
    filesDeleted: RepositoryFile[]
    filesToRepository: string[]
    itemsToRepository: string[]
    tokensToPassOn: PipelineToken[]
}