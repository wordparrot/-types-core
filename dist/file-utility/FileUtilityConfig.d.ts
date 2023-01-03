/// <reference types="node" />
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
    parentRepositoryItem?: {
        nodeUniqId: string;
        uniqId: string;
    };
}
