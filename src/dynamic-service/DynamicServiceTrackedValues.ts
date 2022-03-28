import { PipelineMessage } from ".."
import { FileMetadata } from ".."
import { RepositoryItem } from ".."
import { RepositoryFile } from ".."
import { PipelineToken } from ".."
import { CsvMetadata } from ".."

export interface DynamicServiceTrackedValues {
    messagesToPassOn: PipelineMessage[]
    tokensToPassOn: PipelineToken[]

    csvToPassOn: CsvMetadata[]
    csvDeleted: CsvMetadata[]
    itemsToPassOn: RepositoryItem[]
    itemsDeleted: RepositoryItem[]
    jsonToPassOn: Record<string, unknown>[]
    jsonDeleted: Record<string, unknown>[]
    fileMetadataToPassOn: FileMetadata[]
    fileMetadataDeleted: FileMetadata[]
    filesToPassOn: RepositoryFile[]
    filesDeleted: RepositoryFile[]
    
    filesToRepository: string[]
    itemsToRepository: string[]
}