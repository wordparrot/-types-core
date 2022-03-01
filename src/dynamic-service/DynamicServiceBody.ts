import { PipelineNode, RepositoryItem, RepositoryFile } from "..";

export interface DynamicServiceBody {
    plugin: {
      name: string
      action: string
      script: string
    }
    pipeline: {
      pipelineId: string
      pipelineJobId: string
      pipelineNodeId: string
      pipelineNode: PipelineNode
    }
    site: {
      site?: Record<string, any>
      category?: Record<string, any>
    }
    input: {
      itemsFromParent?: RepositoryItem[]
      filesFromParent?: RepositoryFile[]
      tokensFromParent?: Record<string, any>[]
      repositoryItems?: RepositoryItem[]
      repositoryItemIds?: string[]
      repositoryItemCount?: number
    }
    parameters: {
      conditionFailed: string[]
    }
}