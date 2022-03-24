import { RepositoryFile, RepositoryItem } from ".."
import { CsvMetadata } from ".."
import { FileMetadata } from '..'

export interface DynamicServiceResponseOutputBase {
    message: string
    messageVars: Record<string, string | number>
    status: string
    errors: Record<string, any>
    pipelineCount: number
    csvToPassOn: CsvMetadata[]
    messagesToPassOn: any[]
    itemsToPassOn: RepositoryItem[]
    itemsDeleted: RepositoryItem[]
    jsonToPassOn: any[]
    jsonDeleted: any[]
    fileMetadataToPassOn: FileMetadata[]
    filesToPassOn: RepositoryFile[]
    filesDeleted: RepositoryFile[]
    tokensToPassOn: { name: string, value: string }[]
}

export type DynamicServiceResponseOutput = Partial<DynamicServiceResponseOutputBase>