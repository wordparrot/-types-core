import { Pipeline, PipelineNode, PipelineGroup } from "..";
import { DataStore } from "..";
import { PromptInstance } from ".";
import { Csv, RepositoryFile } from "..";
import { PromptPolicy } from ".";
import { User } from '..';
export interface Prompt {
    id: string;
    title: string;
    content: string;
    provider: string;
    type: string;
    delay: number;
    policy: PromptPolicy;
    policyId: string;
    defaultRecipients: User[];
    downstreamPipelines: Pipeline[];
    pipelineNodes: PipelineNode[];
    instances: PromptInstance[];
    dataStores: DataStore[];
    files: RepositoryFile[];
    csv: Csv[];
    pipelineGroupId: string;
    pipelineGroup: PipelineGroup;
    createdAt: string;
    updatedAt: string;
}
