import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { PipelineToken } from "..";
export interface DynamicServiceBodyParameters {
    status: string;
    recordReports: boolean;
    messagesFromParent: PipelineMessage[];
    fileMetadataFromParent: FileMetadata[];
    fileMetadataDeleted?: FileMetadata[];
    filesFromParent: RepositoryFile[];
    filesDeleted?: RepositoryFile[];
    itemsFromParent: RepositoryItem[];
    itemsDeleted?: RepositoryItem[];
    jsonFromParent: Record<string, any>[];
    jsonDeleted?: Record<string, any>[];
    tokensFromParent: PipelineToken[];
    entriesFromParent: any[];
    category: any;
    conditionFailedFromParent: string[];
    conditionFailed: string[];
}
