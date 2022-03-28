import { PipelineNode, PipelineJob } from ".";

export interface PipelineNodeReport {
  id?: string
  status: string
  errorMessage?: string
  pipelineNodeId: string
  pipelineJobId: string
  
  toPassOn: {
    messages: Record<string, unknown>[]
    messagesTotal: number
    tokens: Record<string, unknown>[]
    tokensTotal: number

    csv: Record<string, unknown>[]
    csvTotal: number
    files: Record<string, unknown>[]
    filesTotal: number
    fileMetadata: Record<string, unknown>[]
    fileMetadataTotal: number
    items: Record<string, unknown>[]
    itemsTotal: number
    json: Record<string, unknown>[]
    jsonTotal: number
  }
  diff: {
    messagesToPassOn: Record<string, unknown>[]
    messagesToPassOnTotal: number
    tokensToPassOn: Record<string, unknown>[]
    tokensToPassOnTotal: number

    csvToPassOn: Record<string, unknown>[]
    csvToPassOnTotal: number
    csvDeleted: Record<string, unknown>[]
    csvDeletedTotal: number
    filesToPassOn: Record<string, unknown>[]
    filesToPassOnTotal: number
    filesDeleted: Record<string, unknown>[]
    filesDeletedTotal: number
    fileMetadataToPassOn: Record<string, unknown>[];
    fileMetadataToPassOnTotal: number;
    fileMetadataDeleted: Record<string, unknown>[]
    fileMetadataDeletedTotal: number
    itemsToPassOn: Record<string, unknown>[]
    itemsToPassOnTotal: number
    itemsDeleted: Record<string, unknown>[]
    itemsDeletedTotal: number
    jsonToPassOn: Record<string, unknown>[]
    jsonTotal: number
    jsonDeleted: Record<string, unknown>[]
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