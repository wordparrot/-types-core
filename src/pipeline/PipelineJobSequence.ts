import { PipelineGroup, PipelineJob } from ".";
import { Listener } from "../listener";
import { PromptInstance, PromptRecipient } from "../prompt";
import { Webhook } from "../webhook";

export interface PipelineJobSequence {
  id: string;
  status: string;
  delay: number;

  project: PipelineGroup;
  projectId: string;

  promptInstance: PromptInstance;
  promptInstanceId: string;

  promptRecipient: PromptRecipient;
  promptRecipientId: string;

  listener: Listener;
  listenerId: string;

  webhook: Webhook;
  webhookId: string;

  jobs: PipelineJob[];

  completedAt: string;
  createdAt: string;
  updatedAt: string;
}
