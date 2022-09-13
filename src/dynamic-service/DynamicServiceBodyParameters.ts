import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
import { EmailMetadata } from "..";
import { PromptToPassOn } from "..";
import { DynamicServiceBodyContext } from ".";

export interface DynamicServiceBodyParameters {
  status: string;
  recordReports: boolean;

  messagesFromParent: PipelineMessage[];
  csvFromParent: CsvMetadata[];
  csvDeleted?: CsvMetadata[];
  emailMetadataFromParent: EmailMetadata[];
  fileMetadataFromParent: FileMetadata[];
  fileMetadataDeleted?: FileMetadata[];
  itemsFromParent: RepositoryItem[];
  itemsDeleted?: RepositoryItem[];
  jsonFromParent: any[];
  jsonDeleted?: any[];
  tokensFromParent: PipelineToken[];
  promptsFromParent: PromptToPassOn[];

  context: DynamicServiceBodyContext;

  entriesFromParent: any[];
  category: any;

  conditionsFailedFromParent: string[];
}
