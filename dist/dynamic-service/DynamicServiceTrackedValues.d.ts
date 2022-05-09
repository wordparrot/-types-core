import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
import { PipelineOperationFailed } from "..";
import { EmailMetadata } from "..";
export interface DynamicServiceTrackedValues {
    messagesToPassOn: PipelineMessage[];
    tokensToPassOn: PipelineToken[];
    csvToPassOn: CsvMetadata[];
    csvDeleted: CsvMetadata[];
    emailMetadataToPassOn: EmailMetadata[];
    fileMetadataToPassOn: FileMetadata[];
    fileMetadataDeleted: FileMetadata[];
    itemsToPassOn: RepositoryItem[];
    itemsDeleted: RepositoryItem[];
    jsonToPassOn: Record<string, any>[];
    jsonDeleted: Record<string, any>[];
    filesToRepository: string[];
    itemsToRepository: string[];
    csvToRepository: string[];
    operationsFailed: PipelineOperationFailed[];
}
