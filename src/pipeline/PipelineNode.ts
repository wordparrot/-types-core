import { Pipeline, PipelineNodeCondition } from ".";
import { Repository, RepositoryTag } from "..";
import { FeaturedThread } from "..";


export interface PipelineNode {
    id?: string
    title?: string
    content?: string
    prospectiveTitle?: string
    prospectiveContent?: string
    categoryId?: string
    subcategoryId?: string
    featuredGroupId?: string
    featuredThreadIds?: (undefined | string)[]
    featuredThreads?: FeaturedThread[]
    type: string
    subtype?: string
    provider?: string
    action?: string
    mode?: string
    topic?: string
    group?: string
    subgroup?: string
    language?: string
    location?: string
    method?: string
    url?: string
    domain?: string
    path?: string
    from?: string
    to?: string
    emailAddresses?: string
    search?: string
    select?: string
    sort?: string
    limit?: number
    skip?: number
    status?: string
    date?: number
  
    whitelistCSV?: string
    blacklistCSV?: string
  
    repository?: Repository
    repositoryId?: string

    repositoryTags?: RepositoryTag[]
    repositoryTagIds?: string[]

    credential?: Credential
    credentialId?: string
    
    pipelineId: string
    pipeline?: Pipeline

    parentNode?: PipelineNode
    parentNodeId?: string
  
    conditions?: PipelineNodeCondition[]
  
    createdAt?: string
    updatedAt?: string
  }