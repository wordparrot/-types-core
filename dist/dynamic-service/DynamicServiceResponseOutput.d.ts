import { RepositoryFile, RepositoryItem } from "..";
import { CsvMetadata } from "..";
import { FileMetadata } from '..';
import { PipelineMessage } from "..";
import { PipelineToken } from "..";
import { BroadcastToFeaturedGroup } from "..";
import { BroadcastToFeaturedThread } from "..";
import { PushNotificationToFeaturedThread } from "..";
import { Entry } from '..';
import { PushNotificationToFeaturedGroup } from "..";
export interface DynamicServiceResponseOutputBase {
    message: string;
    messageVars: Record<string, string | number>;
    status: string;
    errors: Record<string, any>;
    errorMessage: string;
    pipelineCount: number;
    repositoryItemCount: number;
    entryCount: number;
    csvToPassOn: CsvMetadata[];
    messagesToPassOn: PipelineMessage[];
    entriesToPassOn: Entry[];
    itemsToPassOn: RepositoryItem[];
    itemsDeleted: RepositoryItem[];
    jsonToPassOn: Record<string, any>[];
    jsonDeleted: Record<string, any>[];
    fileMetadataToPassOn: FileMetadata[];
    filesToPassOn: RepositoryFile[];
    filesDeleted: RepositoryFile[];
    filesToRepository: string[];
    itemsToRepository: string[];
    tokensToPassOn: PipelineToken[];
    refreshTokenToSave: string;
    repositoryId: string;
    chartId: string;
    categoryId: string;
    conditionFailed: string[];
    broadcastToFeaturedGroups: BroadcastToFeaturedGroup[];
    broadcastToFeaturedThreads: BroadcastToFeaturedThread[];
    pushNotificationToFeaturedGroups: PushNotificationToFeaturedGroup[];
    pushNotificationToFeaturedThreads: PushNotificationToFeaturedThread[];
}
export declare type DynamicServiceResponseOutput = Partial<DynamicServiceResponseOutputBase>;
