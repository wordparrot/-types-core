import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
import { PipelineOperationFailed } from "..";
import { EmailMetadata } from "..";
import { DynamicServiceOutputPolicy } from "..";
import { DynamicServiceBodyContext } from ".";
import { PromptToPassOn } from "..";
import { PromptInstance } from "..";
import { BatchResults } from "../_classes/batch-manager";
import { UpdateCredential } from "..";

export interface DynamicServiceTrackedValues {
  messagesToPassOn: PipelineMessage[];
  tokensToPassOn: PipelineToken[];

  csvToPassOn: CsvMetadata[];
  csvDeleted: CsvMetadata[];
  emailMetadataToPassOn: EmailMetadata[];
  fileMetadataToPassOn: FileMetadata[];
  fileMetadataDeleted: FileMetadata[];
  itemsToPassOn: RepositoryItem[];
  itemsDeleted: RepositoryItem[];
  jsonToPassOn: any[];
  jsonDeleted: any[];
  promptsToPassOn: PromptToPassOn[];
  promptsDeleted: PromptToPassOn[];
  promptInstancesToPassOn: PromptInstance[];

  filesToRepository: string[];
  itemsToRepository: string[];
  csvToRepository: string[];

  contextToPassOn?: DynamicServiceBodyContext;
  policy?: Partial<DynamicServiceOutputPolicy>;
  batchResults?: BatchResults;
  updateCredential?: UpdateCredential;

  operationsFailed: PipelineOperationFailed[];
  conditionsFailed: string[];
}
