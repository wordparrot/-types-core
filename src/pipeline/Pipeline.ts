import { PipelineNode, PipelineJob, PipelineGroup } from ".";
import { Listener } from "..";
import { Site } from '..'
import { User } from '..'
import { Role } from '..'
import { FeaturedThreadPreference } from "../featured-group";

export interface Pipeline {
    id: string
    title: string
    content: string
    etag: string
    recordReports: boolean
    runInterval: number
    runUnit: string
    nextRun: number
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

    createdAt: string
    updatedAt: string
}