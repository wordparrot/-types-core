import { Pipeline } from ".";

export interface PipelineGroup {
    id?: string
    title: string
    content?: string
    pipelines: Pipeline[]
    siteId: string
    userId: string
    createdAt?: string
    updatedAt?: string
}