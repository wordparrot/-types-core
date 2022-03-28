import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "../csv";
export interface DynamicServiceBodyParameters {
    status: string;
    recordReports: boolean;
    messagesFromParent: PipelineMessage[];
    csvFromParent: CsvMetadata[];
    csvDeleted?: CsvMetadata[];
    fileMetadataFromParent: FileMetadata[];
    fileMetadataDeleted?: FileMetadata[];
    filesFromParent: RepositoryFile[];
    filesDeleted?: RepositoryFile[];
    itemsFromParent: RepositoryItem[];
    itemsDeleted?: RepositoryItem[];
    jsonFromParent: Record<string, any>[];
    jsonDeleted?: Record<string, any>[];
    tokensFromParent: PipelineToken[];
    entriesFromParent: unknown[];
    category: unknown;
    conditionFailedFromParent: string[];
    conditionFailed: string[];
}
