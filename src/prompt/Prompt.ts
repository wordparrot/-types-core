import { Pipeline, PipelineNode } from "..";
import { DataStore } from "..";
import { PromptRecipient } from ".";
import { PromptInstance } from ".";

export interface Prompt {
  id: string;
  title: string;
  content: string;

  provider: string;
  type: string;

  requireAuth: boolean;
  requireAllRecipients: boolean;
  viewAfterSubmit: boolean;

  includeCsv: boolean;
  includeFiles: boolean;
  includeJSON: boolean;

  schema: any;
  uiSchema: any;

  defaultRecipients: PromptRecipient[];
  downstreamPipelines: Pipeline[];
  instances: PromptInstance[];

  createdAt: string;
  updatedAt: string;
}
