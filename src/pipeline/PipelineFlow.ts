import { PipelineNode, Pipeline } from ".";
import { FeaturedThreadRelease } from "..";
import { RepositoryItem } from "..";

export interface PipelineFlow {
    id: string
    pipeline?: Pipeline
    pipelineNode?: PipelineNode
    pipelineNodeId?: string
    pipelineJobId?: string
    featuredThreadReleaseId?: string
    featuredThreadRelease?: FeaturedThreadRelease
    repositoryItems: RepositoryItem[]
    platforms?: string[]
    createdAt?: string
    updatedAt?: string
}