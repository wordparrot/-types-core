import { DataStoreVersion } from ".";
import { PipelineNode } from "..";
import { Repository } from "..";
import { Prompt, PromptInstance } from "..";
export interface DataStore {
    id: string;
    title: string;
    content: string;
    uniqId: string;
    filename: string;
    format: string;
    version: string;
    saveBackups: boolean;
    versions: DataStoreVersion[];
    pipelineNodes: PipelineNode[];
    prompts: Prompt[];
    promptInstances: PromptInstance[];
    repository?: Repository;
    repositoryId?: string;
    pipelineFlow?: string;
    createdAt: string;
    updatedAt: string;
}
