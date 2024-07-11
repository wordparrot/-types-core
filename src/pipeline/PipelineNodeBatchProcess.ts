import {
  PipelineNode,
  PipelineJob,
  PipelineNodeReport,
  PipelineRedis,
} from ".";
import {
  DynamicServiceTrackedValues,
  PipelineNodeBatchProcessConfigType,
  PipelineNodeBatchProcessConfigErrorHandling,
} from "..";
import { BatchResults } from "../_classes";

export interface PipelineNodeBatchProcess {
  id: string;
  status: string;
  batchIndex: number;
  batchSize: number;
  type: PipelineNodeBatchProcessConfigType;
  onError: PipelineNodeBatchProcessConfigErrorHandling;

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
