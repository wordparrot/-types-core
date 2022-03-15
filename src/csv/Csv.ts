import { CsvRow } from "."
import { PipelineNode } from ".."

export interface Csv {
  id: string
  uniqId: boolean
  rowUniqId: string
  secondaryRowUniqId?: string
  url: boolean
  provider: boolean
  metadata: Record<string, any>
  
  rows: CsvRow[]
  pipelineNode: PipelineNode
  pipelineNodeId: string

  createdAt: string
  updatedAt: string
}