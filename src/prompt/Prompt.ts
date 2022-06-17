import { Pipeline, PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { PromptInstance } from ".";
import { PromptInstanceOptions } from ".";

export interface Prompt extends PromptInstanceOptions {
  id: string;
  title: string;
  content: string;

  provider: string;
  type: string;

  includeCsv: boolean;
  includeFiles: boolean;
  includeJSON: boolean;

  enableDownloads: boolean;
  enableUploads: boolean;
  issueDuplicates: boolean;

  defaultRecipients: PromptRecipient[];
  downstreamPipelines: Pipeline[];
  upstreamPipelineNodes: PipelineNode[];
  instances: PromptInstance[];

  createdAt: string;
  updatedAt: string;
}
