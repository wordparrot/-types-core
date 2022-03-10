import { RepositoryTag, Repository, RepositoryItem } from ".";
import { PipelineJob } from '..'
import { Entry } from '..'
import { PipelineFlow } from "..";

export interface RepositoryFile {
    id: string
    title: string
    content: string
    uniqId: string
    nodeUniqId: string
    type: string
    filename: string
    format: string
    provider: string
    platform: string
    path: string   
    permalink: string
    url: string
    language: string

    pipelineJob: PipelineJob
    repository: Repository
    parentRepositoryItem: RepositoryItem
    entries: Entry[]
    repositoryTags: RepositoryTag[]
    pipelineFlow: PipelineFlow

    createdAt: string
    updatedAt: string
}