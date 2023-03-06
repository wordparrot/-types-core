/// <reference types="node" />
import { WriteFileOptions } from "fs";
export interface FileMetadata {
    uniqId: string;
    filename: string;
    path: string;
    contentFolder?: 'images' | 'media';
    buffer?: Buffer;
    type?: string;
    mimeType?: string;
    encoding?: WriteFileOptions;
    pipelineJobId?: string;
    pipelineNodeId?: string;
    repositoryId?: string;
    repositoryFileId?: string;
    imageId?: string;
    parentRepositoryItem?: {
        nodeUniqId: string;
        uniqId: string;
    };
}
