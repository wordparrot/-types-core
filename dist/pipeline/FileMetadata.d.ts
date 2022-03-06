/// <reference types="node" />
export interface FileMetadata {
    uniqId: string;
    path: string;
    filename: string;
    buffer?: Buffer;
    type?: string;
    pipelineJobId: string;
    pipelineNodeId: string;
    parentRepositoryItem?: {
        nodeUniqId: string;
        uniqId: string;
    };
}
