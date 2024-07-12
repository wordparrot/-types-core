import { PipelineJob, PipelineNodeReport, PipelineRedis, Pipeline } from ".";
import { DynamicServiceTrackedValues } from "..";
import { BatchResults } from "../_classes";
import { PipelineBatchProcessConfigErrorHandling, PipelineBatchProcessConfigType } from ".";
export interface PipelineBatchProcess {
    id: string;
    status: string;
    batchIndex: number;
    type: PipelineBatchProcessConfigType;
    batchSize: number;
    onError: PipelineBatchProcessConfigErrorHandling;
    nodes: string[];
    batchResults: BatchResults;
    parentTrackedValues: DynamicServiceTrackedValues;
    pipelineRedis?: PipelineRedis;
    diff?: PipelineNodeReport["diff"];
    pipelineJob?: PipelineJob;
    pipelineJobId: string;
    pipeline?: Pipeline;
    pipelineId?: string;
    latestBatchAt?: string;
    createdAt?: string;
    updatedAt?: string;
}
