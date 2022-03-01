import { PipelineNode } from ".";
import { Listener } from "..";

export interface AbstractPipeline {
    id?: string
    title: string
    content?: string
    runInterval: number
    runUnit: string
    nextRun: any
    status: string
    recordReports: boolean
    queueStatus: string
    createdAt?: string
    updatedAt?: string
}
  
export interface Pipeline extends AbstractPipeline {
    pipelineGroupId: string
    nodes: PipelineNode[]
    listeners: Listener[]
}