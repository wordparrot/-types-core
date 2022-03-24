/// <reference types="node" />
import { WriteFileOptions } from 'fs';
import { FileOperation } from '..';
import { FileMetadata } from '..';
export interface FileUtilityConfig {
    uniqId?: string;
    pipelineJobId?: string;
    pipelineNodeId?: string;
    filename: string;
    buffer?: Buffer;
    repositoryId?: string;
    parentRepositoryItem?: {
        nodeUniqId: string;
        uniqId: string;
    };
}
export declare class FileUtility {
    pipelineJobId: string;
    pipelineNodeId: string;
    filename: string;
    buffer?: Buffer;
    extension: string;
    repositoryId: string;
    uniqId: string;
    parentRepositoryItem?: {
        nodeUniqId: string;
        uniqId: string;
    };
    tempFolder: string;
    repositoriesFolder: string;
    constructor(config: FileUtilityConfig);
    get jobPath(): string;
    get nodePath(): string;
    get filePath(): string;
    get repositoriesPath(): string;
    get repositoriesFilePath(): string;
    saveToTemp(encoding?: WriteFileOptions): Promise<FileMetadata>;
    private createNodeTempFolders;
    private writeToTempFolder;
    createRepositoryFolder(): Promise<void>;
    private retrieveBufferFromTemp;
    saveTempToRepositoryFolder(encoding?: WriteFileOptions, buffer?: Buffer): Promise<FileOperation>;
    deleteFromRepositoryFolder(): Promise<FileOperation>;
    removeNodeFolder(): Promise<void>;
    incrementCopyNumber(): void;
    hasCopyNumber(str: string): boolean;
}
