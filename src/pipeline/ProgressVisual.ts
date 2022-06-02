export interface ProgressVisual {
  id: string;
  status: string;

  upstreamPipelineId: string;
  pipelineId: string;

  upstreamPipelineJobId: string;
  pipelineJobId: string;

  upstreamPipelineNodeId: string;
  pipelineNodeId: string;

  createdAt: string;
  updatedAt: string;
  completedAt: string;
}
