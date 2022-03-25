import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { PipelineToken } from "..";
export interface DynamicServiceTrackedValues {
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
}
