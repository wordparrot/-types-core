import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
import { PipelineOperationFailed } from "../pipeline";

export interface DynamicServiceTrackedValues {
  messagesToPassOn: PipelineMessage[];
  tokensToPassOn: PipelineToken[];

  csvToPassOn: CsvMetadata[];
  csvDeleted: CsvMetadata[];
  itemsToPassOn: RepositoryItem[];
  itemsDeleted: RepositoryItem[];
  jsonToPassOn: Record<string, any>[];
  jsonDeleted: Record<string, any>[];
  fileMetadataToPassOn: FileMetadata[];
  fileMetadataDeleted: FileMetadata[];

  filesToRepository: string[];
  itemsToRepository: string[];
  csvToRepository: string[];

  operationsFailed: PipelineOperationFailed[];
}
