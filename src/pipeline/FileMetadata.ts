import {
  WriteFileOptions,
} from 'fs'
export interface FileMetadata {
  uniqId: string
  path: string
  filename: string
  buffer?: Buffer
  type?: string
  mimeType?: string
  encoding?: WriteFileOptions
  pipelineJobId: string
  pipelineNodeId: string
  parentRepositoryItem?: {
    nodeUniqId: string
    uniqId: string
  }
}