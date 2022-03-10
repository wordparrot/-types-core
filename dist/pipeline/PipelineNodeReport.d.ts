import { PipelineNode, PipelineJob } from ".";
export interface PipelineNodeReport {
    id: string;
    status: string;
    errorMessage: string;
    pipelineNodeId: string;
    pipelineJobId: string;
    toPassOn: {
        messages: Record<string, any>[];
        messagesTotal: number;
        files: Record<string, any>[];
        filesTotal: number;
        items: Record<string, any>[];
        itemsTotal: number;
        tokens: Record<string, any>[];
        tokensTotal: number;
    };
    diff: {
        messagesToPassOn: Record<string, any>[];
        messagesToPassOnTotal: number;
        itemsToPassOn: Record<string, any>[];
        itemsToPassOnTotal: number;
        itemsDeleted: Record<string, any>[];
        itemsDeletedTotal: number;
        filesToPassOn: Record<string, any>[];
        filesToPassOnTotal: number;
        filesDeleted: Record<string, any>[];
        filesDeletedTotal: number;
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
