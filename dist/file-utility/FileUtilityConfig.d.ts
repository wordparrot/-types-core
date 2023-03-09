/// <reference types="node" />
import { FileMetadataContentFolder } from "..";
export interface FileUtilityConfig<E = any> {
    pipelineJobId: string;
    pipelineNodeId: string;
    filename: string;
    promptRecipientId?: string;
    uniqId?: string;
    buffer?: Buffer;
    mimeType?: string;
    encoding?: E;
    repositoryId?: string;
    repositoryFileId?: string;
    predefinedPath?: string;
    imageId?: string;
    contentFolder?: FileMetadataContentFolder;
    parentRepositoryItem?: {
        nodeUniqId: string;
        uniqId: string;
    };
    header: string;
    caption: string;
}
