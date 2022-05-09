import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
import { EmailMetadata } from "..";
export interface DynamicServiceBodyParameters {
    status: string;
    recordReports: boolean;
    messagesFromParent: PipelineMessage[];
    csvFromParent: CsvMetadata[];
    csvDeleted?: CsvMetadata[];
    fileMetadataFromParent: FileMetadata[];
    fileMetadataDeleted?: FileMetadata[];
    itemsFromParent: RepositoryItem[];
    itemsDeleted?: RepositoryItem[];
    jsonFromParent: Record<string, any>[];
    jsonDeleted?: Record<string, any>[];
    tokensFromParent: PipelineToken[];
    emailFromParent: EmailMetadata[];
    entriesFromParent: any[];
    category: any;
    conditionFailedFromParent: string[];
    conditionFailed: string[];
}
