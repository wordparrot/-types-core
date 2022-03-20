import { RepositoryFile, RepositoryItem } from "..";
import { CsvMetadata } from "..";
export interface DynamicServiceResponseOutputBase {
    message: string;
    messageVars: Record<string, string | number>;
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
    csvToPassOn: CsvMetadata[];
}
export declare type DynamicServiceResponseOutput = Partial<DynamicServiceResponseOutputBase>;
