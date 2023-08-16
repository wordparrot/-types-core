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
    repositoryId: string;
    repository: Repository;
    createdAt: string;
    updatedAt: string;
}
