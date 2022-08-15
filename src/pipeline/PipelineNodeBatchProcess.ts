import { PipelineNode, PipelineJob } from ".";

export interface PipelineNodeBatchProcess {
  id: string;
  status: string;
  batchIndex: number;
  batchState: any;
  parentNodeState: any;
  pipelineRedis: any;

  pipelineJob: PipelineJob;
  pipelineJobId: string;
  pipelineNode: PipelineNode;
  pipelineNodeId: string;

  createdAt: string;
  updatedAt: string;
}
