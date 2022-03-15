import { CsvRow } from "."
import { PipelineNode } from ".."

export interface Csv {
  id: string
  uniqId: boolean
  rowIdValue: string
  rowIdType: string
  secondaryRowId: string
  filename: string
  url: boolean
  provider: boolean
  providerMetadata: Record<string, any>
  page: number

  rows: CsvRow[]
  pipelineNode: PipelineNode
  pipelineNodeId: string

  createdAt: string
  updatedAt: string
}