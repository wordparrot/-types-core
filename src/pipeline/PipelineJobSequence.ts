import { PipelineJob } from ".";
import { Listener } from "../listener";
import { PromptInstance } from "../prompt";
import { Webhook } from "../webhook";

export interface PipelineJobSequence {
  id: string;
  status: string;

  promptInstance: PromptInstance;
  promptInstanceId: string;

  listener: Listener;
  listenerId: string;

  webhook: Webhook;
  webhookId: string;

  jobs: PipelineJob[];

  completedAt: string;
  createdAt: string;
  updatedAt: string;
}
