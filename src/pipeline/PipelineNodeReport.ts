import { PipelineNode, PipelineJob } from ".";
import { PipelineMessage } from "./PipelineMessage";
import { PipelineToken } from "./PipelineToken";
import { RepositoryFile } from "../repository";
import { RepositoryItem } from "../repository";
import { CsvMetadata } from "../csv";
import { FileMetadata } from "./FileMetadata";
import { PipelineOperationFailed } from "./PipelineOperationFailed";

export interface PipelineNodeReport {
  id?: string
  status: string
  errorMessage?: string
  pipelineNodeId: string
  pipelineJobId: string
  
  toPassOn: {
    messages: PipelineMessage[]
    messagesTotal: number
    tokens: PipelineToken[]
    tokensTotal: number

    csv: CsvMetadata[]
    csvTotal: number
    files: RepositoryFile[]
    filesTotal: number
    fileMetadata: FileMetadata[]
    fileMetadataTotal: number
    items: RepositoryItem[]
    itemsTotal: number
    json: Record<string, any>[]
    jsonTotal: number

    operationsFailed: PipelineOperationFailed[]
    operationsFailedTotal: number
  }
  diff: {
    messagesToPassOn: PipelineMessage[]
    messagesToPassOnTotal: number
    tokensToPassOn: PipelineToken[]
    tokensToPassOnTotal: number

    csvToPassOn: CsvMetadata[]
    csvToPassOnTotal: number
    csvDeleted: CsvMetadata[]
    csvDeletedTotal: number
    filesToPassOn: RepositoryFile[]
    filesToPassOnTotal: number
    filesDeleted: RepositoryFile[]
    filesDeletedTotal: number
    fileMetadataToPassOn: FileMetadata[];
    fileMetadataToPassOnTotal: number;
    fileMetadataDeleted: FileMetadata[]
    fileMetadataDeletedTotal: number
    itemsToPassOn: RepositoryItem[]
    itemsToPassOnTotal: number
    itemsDeleted: RepositoryItem[]
    itemsDeletedTotal: number
    jsonToPassOn: Record<string, any>[]
    jsonTotal: number
    jsonDeleted: Record<string, any>[]
    jsonDeletedTotal: number

    operationsFailed: PipelineOperationFailed[]
    operationsFailedTotal: number
  }

  toRepository?: {
    repositoryId: string
    items: string[]
    itemsTotal: number
    files: string[]
    filesTotal: number
  }

  pipelineNode?: PipelineNode
  pipelineJob?: PipelineJob

  createdAt?: string
  updatedAt?: string
}