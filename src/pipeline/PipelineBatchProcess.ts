import { PipelineJob, PipelineNodeReport, PipelineRedis, Pipeline } from ".";
import { DynamicServiceTrackedValues } from "..";
import { BatchResults } from "../_classes";

import {
  PipelineBatchProcessConfigErrorHandling,
  PipelineBatchProcessConfigType,
} from ".";

export interface PipelineNodeBatchProcess {
  id: string;
  status: string;
  batchIndex: number;

  type: PipelineBatchProcessConfigType;
  batchSize: number; // By default, 1.
  onError: PipelineBatchProcessConfigErrorHandling;
  nodes: string[]; // An array of strings denoting action provider names.

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
