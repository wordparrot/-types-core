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
      pipelineNode: Record<string, any>
    }
    site: {
      site?: Record<string, any>
      category?: Record<string, any>
    }
    input: {
      itemsFromParent?: Record<string, any>[]
      filesFromParent?: Record<string, any>[]
      tokensFromParent?: Record<string, any>[]
      repositoryItems?: Record<string, any>[]
      repositoryItemIds?: string[]
      repositoryItemCount?: number
    }
    parameters: {
      conditionFailed: string[]
    }
}