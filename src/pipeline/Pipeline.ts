import { PipelineNode, PipelineJob, PipelineGroup } from ".";
import { Listener } from "..";
import { Site } from '..'
import { User } from '..'
import { Role } from '..'
import { FeaturedThreadPreference } from "..";
import { Webhook } from '..'

export interface Pipeline {
    id: string | null
    title: string
    content: string
    etag: string
    recordReports: boolean
    runInterval: number
    runUnit: string
    nextRun: number
    nextRunDate?: Date
    status: string
    queueStatus: string

    nodes: PipelineNode[]
    jobs?: PipelineJob[]
    pipelineGroup?: PipelineGroup
    pipelineGroupId: string
    site?: Site
    user?: User
    roles?: Role[]
    upstreamPipelines?: Pipeline[]
    downstreamPipelines?: Pipeline[]
    featuredThreadPreferences?: FeaturedThreadPreference[]
    listeners?: Listener[]
    webhooks?: Webhook[]

    createdAt: string
    updatedAt: string
}