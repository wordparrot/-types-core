import { PipelineNode } from "..";
import { PipelineRedis } from "..";
import { PipelineBatchProcess } from "..";

export interface DynamicServiceBodyPipeline {
  pipelineId: string;
  pipelineNodeId: string;
  pipelineNode: PipelineNode;
  pipelineJobId: string;
  pipelineRedis: PipelineRedis;
  dataStore?: any;
  pipelineBatchProcess?: PipelineBatchProcess;
}
