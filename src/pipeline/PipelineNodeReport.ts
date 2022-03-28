import { PipelineNode, PipelineJob } from ".";

export interface PipelineNodeReport {
  id?: string
  status: string
  errorMessage?: string
  pipelineNodeId: string
  pipelineJobId: string
  
  toPassOn: {
    messages: Record<string, any>[]
    messagesTotal: number
    tokens: Record<string, any>[]
    tokensTotal: number

    csv: Record<string, any>[]
    csvTotal: number
    files: Record<string, any>[]
    filesTotal: number
    fileMetadata: Record<string, any>[]
    fileMetadataTotal: number
    items: Record<string, any>[]
    itemsTotal: number
    json: Record<string, any>[]
    jsonTotal: number
  }
  diff: {
    messagesToPassOn: Record<string, any>[]
    messagesToPassOnTotal: number
    tokensToPassOn: Record<string, any>[]
    tokensToPassOnTotal: number

    csvToPassOn: Record<string, any>[]
    csvToPassOnTotal: number
    csvDeleted: Record<string, any>[]
    csvDeletedTotal: number
    filesToPassOn: Record<string, any>[]
    filesToPassOnTotal: number
    filesDeleted: Record<string, any>[]
    filesDeletedTotal: number
    fileMetadataToPassOn: Record<string, any>[];
    fileMetadataToPassOnTotal: number;
    fileMetadataDeleted: Record<string, any>[]
    fileMetadataDeletedTotal: number
    itemsToPassOn: Record<string, any>[]
    itemsToPassOnTotal: number
    itemsDeleted: Record<string, any>[]
    itemsDeletedTotal: number
    jsonToPassOn: Record<string, any>[]
    jsonTotal: number
    jsonDeleted: Record<string, any>[]
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