import { PipelineNode, PipelineJob } from ".";
export interface PipelineNodeReport {
    id: string;
    status: string;
    errorMessage: string;
    pipelineNodeId: string;
    pipelineJobId: string;
    toPassOn: {
        files: Record<string, any>[];
        filesTotal: number;
        fileMetadata: Record<string, any>[];
        fileMetadataTotal: number;
        items: Record<string, any>[];
        itemsTotal: number;
        json: Record<string, any>[];
        jsonTotal: number;
        messages: Record<string, any>[];
        messagesTotal: number;
        tokens: Record<string, any>[];
        tokensTotal: number;
    };
    diff: {
        filesToPassOn: Record<string, any>[];
        filesToPassOnTotal: number;
        fileMetadataToPassOn: Record<string, any>[];
        fileMetadataToPassOnTotal: number;
        filesDeleted: Record<string, any>[];
        filesDeletedTotal: number;
        itemsToPassOn: Record<string, any>[];
        itemsToPassOnTotal: number;
        itemsDeleted: Record<string, any>[];
        itemsDeletedTotal: number;
        jsonToPassOn: Record<string, any>[];
        jsonTotal: number;
        jsonDeleted: Record<string, any>[];
        jsonDeletedTotal: number;
        messagesToPassOn: Record<string, any>[];
        messagesToPassOnTotal: number;
        tokensToPassOn: Record<string, any>[];
        tokensToPassOnTotal: number;
    };
    toRepository: {
        repositoryId: string;
        items: string[];
        itemsTotal: number;
        files: string[];
        filesTotal: number;
    };
    pipelineNode: PipelineNode;
    pipelineJob: PipelineJob;
    createdAt: string;
    updatedAt: string;
}
