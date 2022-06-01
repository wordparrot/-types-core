export interface ProgressVisual {
  id: string;
  type: string;
  status: string;
  order: number;

  upstreamPipelineId: string;
  pipelineId: string;

  upstreamPipelineJobId: string;
  pipelineJobId: string;

  upstreamPipelineNodeId: string;
  parentPipelineNodeId: string;
  pipelineNodeId: string;

  createdAt: string;
  updatedAt: string;
  completedAt: string;
}
