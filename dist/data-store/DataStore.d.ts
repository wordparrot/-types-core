import { DataStoreSaved } from ".";
import { PipelineNode } from "..";
import { Repository } from "..";
export interface DataStore {
    id: string;
    title: string;
    content: string;
    uniqId: string;
    filename: string;
    format: string;
    version: string;
    saveBackups: boolean;
    saved: DataStoreSaved[];
    pipelineNodes: PipelineNode[];
    repositories: Repository[];
    createdAt: string;
    updatedAt: string;
}
