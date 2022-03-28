import { CsvRow } from ".";
import { PipelineNode } from "..";
import { Repository } from "..";
export interface Csv {
    id: string;
    title: string;
    filename: string;
    content: string;
    uniqId: string;
    rowKeyValue: string;
    rowKeyType: string;
    rowKeyX?: number;
    rowKeyY: number;
    secondaryRowKey: string;
    url: string;
    provider: string;
    providerMetadata: Record<string, unknown>;
    page: number;
    rows: CsvRow[];
    pipelineNodes: PipelineNode[];
    repositories: Repository[];
    createdAt: string;
    updatedAt: string;
}
