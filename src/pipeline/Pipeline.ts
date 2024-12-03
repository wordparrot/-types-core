import { PipelineNode, PipelineJob, PipelineGroup } from ".";
import { Listener } from "..";
import { Site } from "..";
import { User } from "..";
import { Role } from "..";
import { Webhook } from "..";
import { Prompt } from "..";

import { PipelineBatchProcess } from "..";

export interface Pipeline {
  id: string | null;
  title: string;
  content: string;
  etag: string;
  recordReports: boolean;
  runInterval: number;
  runUnit: string;
  nextRun: number;
  nextRunDate?: Date;
  status: string;
  queueStatus: string;
  dataStatus: string;

  nodes: PipelineNode[];
  jobs?: PipelineJob[];
  pipelineGroup?: PipelineGroup;
  pipelineGroupId: string;
  site?: Site;
  user?: User;
  roles?: Role[];
  upstreamPipelineNodes?: PipelineNode[];
  upstreamPrompts?: Prompt[];
  listeners?: Listener[];
  webhooks?: Webhook[];

  batchProcesses?: PipelineBatchProcess[];

  createdAt: string;
  updatedAt: string;
}
