import {
  PipelineNode,
  PipelineJob,
  PipelineNodeReport,
  PipelineRedis,
} from ".";
import { DynamicServiceTrackedValues } from "..";
import { BatchResults } from "../_classes";

export interface PipelineNodeBatchProcess {
  id: string;
  status: string;
  batchIndex: number;
  batchSize?: number;

  batchResults: BatchResults;
  parentTrackedValues: DynamicServiceTrackedValues;
  pipelineRedis?: PipelineRedis;
  diff?: PipelineNodeReport["diff"];

  pipelineJob?: PipelineJob;
  pipelineJobId: string;
  pipelineNode?: PipelineNode;
  pipelineNodeId: string;

  latestBatchAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
