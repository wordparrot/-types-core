import { PipelineNode } from "..";
import { PipelineRedis } from "..";
import { DataStore } from "..";

export interface DynamicServiceBodyPipeline {
  pipelineId: string;
  pipelineJobId?: string;
  pipelineNodeId: string;
  pipelineNode: PipelineNode;
  pipelineRedis?: PipelineRedis;
  dataStore?: DataStore;
}
