import { RepositoryFile, RepositoryItem } from "..";
export interface DynamicServiceResponseOutputBase {
    message: string;
    status: string;
    errors: Record<string, any>;
    pipelineCount: number;
    messagesToPassOn: any[];
    itemsToPassOn: RepositoryItem[];
    itemsDeleted: RepositoryItem[];
    filesToPassOn: RepositoryFile[];
    filesDeleted: RepositoryFile[];
    tokensToPassOn: {
        name: string;
        value: string;
    }[];
}
export declare type DynamicServiceResponseOutput = Partial<DynamicServiceResponseOutputBase>;
