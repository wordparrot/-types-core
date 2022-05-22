import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
import { EmailMetadata } from "..";
import { DynamicServiceBodyByProvider } from ".";
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
    byProvider?: DynamicServiceBodyByProvider;
    entriesFromParent: any[];
    category: any;
    conditionFailedFromParent: string[];
    conditionFailed: string[];
}
