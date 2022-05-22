import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
import { PipelineOperationFailed } from "..";
import { EmailMetadata } from "..";
import { DynamicServiceOutputPolicy } from "..";
import { DynamicServiceBodyByProvider } from ".";

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

  filesToRepository: string[];
  itemsToRepository: string[];
  csvToRepository: string[];

  byProvider?: DynamicServiceBodyByProvider;
  policy?: Partial<DynamicServiceOutputPolicy>;

  operationsFailed: PipelineOperationFailed[];
}
