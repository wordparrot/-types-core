import {
  PipelineJob,
  PipelineNodeReport,
  PipelineRedis,
  Pipeline,
  PipelineBatchProcessNodeMeta,
} from ".";
import { DynamicServiceTrackedValues } from "..";
import { BatchResults } from "../_classes";
import { PipelineBatchProcessJobStatus, PipelineBatchProcessConfig } from ".";

export interface PipelineBatchProcessJob {
  id: string;
  status: PipelineBatchProcessJobStatus;

  pipelineBatchProcessId: string;

  pipelineJob?: PipelineJob;
  pipelineJobId: string;

  config: PipelineBatchProcessConfig;

  batchResults: BatchResults;
  parentTrackedValues: DynamicServiceTrackedValues;
  pipelineRedis?: PipelineRedis;
  diff?: PipelineNodeReport["diff"];

  createdAt?: string;
  updatedAt?: string;
  completedAt?: string;
}
