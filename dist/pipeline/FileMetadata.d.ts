/// <reference types="node" />
import { WriteFileOptions } from "fs";
export declare type FileMetadataContentFolder = "images" | "media" | "temp" | "repositories";
export interface FileMetadata {
    uniqId: string;
    filename: string;
    path: string;
    header: string;
    caption: string;
    publicURL: string | null;
    buffer?: Buffer;
    type?: string;
    mimeType?: string;
    encoding?: WriteFileOptions;
    pipelineJobId?: string;
    pipelineNodeId?: string;
    repositoryId?: string;
    repositoryFileId?: string;
    imageId?: string;
    contentFolder?: FileMetadataContentFolder;
    parentRepositoryItem?: {
        nodeUniqId: string;
        uniqId: string;
    };
}
