import { PipelineNode, PipelineJob } from ".";
import { PipelineMessage } from "./PipelineMessage";
import { PipelineToken } from "./PipelineToken";
import { RepositoryFile } from "../repository";
import { RepositoryItem } from "../repository";
import { CsvMetadata } from "../csv";
import { FileMetadata } from "./FileMetadata";

export interface PipelineNodeReport {
  id?: string
  status: string
  errorMessage?: string
  pipelineNodeId: string
  pipelineJobId: string
  
  toPassOn: {
    messages: Record<string, PipelineMessage>[]
    messagesTotal: number
    tokens: Record<string, PipelineToken>[]
    tokensTotal: number

    csv: Record<string, CsvMetadata>[]
    csvTotal: number
    files: Record<string, RepositoryFile>[]
    filesTotal: number
    fileMetadata: Record<string, FileMetadata>[]
    fileMetadataTotal: number
    items: Record<string, RepositoryItem>[]
    itemsTotal: number
    json: Record<string, Record<string, any>>[]
    jsonTotal: number
  }
  diff: {
    messagesToPassOn: Record<string, PipelineMessage>[]
    messagesToPassOnTotal: number
    tokensToPassOn: Record<string, PipelineToken>[]
    tokensToPassOnTotal: number

    csvToPassOn: Record<string, CsvMetadata>[]
    csvToPassOnTotal: number
    csvDeleted: Record<string, CsvMetadata>[]
    csvDeletedTotal: number
    filesToPassOn: Record<string, RepositoryFile>[]
    filesToPassOnTotal: number
    filesDeleted: Record<string, RepositoryFile>[]
    filesDeletedTotal: number
    fileMetadataToPassOn: Record<string, FileMetadata>[];
    fileMetadataToPassOnTotal: number;
    fileMetadataDeleted: Record<string, FileMetadata>[]
    fileMetadataDeletedTotal: number
    itemsToPassOn: Record<string, RepositoryItem>[]
    itemsToPassOnTotal: number
    itemsDeleted: Record<string, RepositoryItem>[]
    itemsDeletedTotal: number
    jsonToPassOn: Record<string, Record<string, any>>[]
    jsonTotal: number
    jsonDeleted: Record<string, Record<string, any>>[]
    jsonDeletedTotal: number
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