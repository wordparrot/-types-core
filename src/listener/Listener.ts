import { AbstractPipelineNode } from "..";

export interface Listener extends AbstractPipelineNode {
  queueStatus: string;
  pollDelay: number;
  recordJobs: boolean;
}
