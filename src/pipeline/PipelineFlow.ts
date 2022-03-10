import { PipelineNode, Pipeline, PipelineJob } from ".";
import { FeaturedThreadRelease } from "..";
import { RepositoryItem } from "..";
import { Repository } from "..";
import { RepositoryHistory } from "..";
import { Site } from "..";
import { User } from '..'

export interface PipelineFlow {
    id: string
    platforms: string[]

    pipeline: Pipeline
    pipelineJob: PipelineJob
    pipelineNode: PipelineNode
    featuredThreadRelease: FeaturedThreadRelease
    repository: Repository
    repositoryItems: RepositoryItem[]
    repositoryHistory: RepositoryHistory
    site: Site
    user: User
    
    createdAt?: string
    updatedAt?: string
}