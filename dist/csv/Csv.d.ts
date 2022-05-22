import { CsvRow } from ".";
import { PipelineNode } from "..";
import { Repository } from "..";
export interface Csv {
    id: string;
    title: string;
    filename: string;
    content: string;
    uniqId: string;
    url: string;
    provider: string;
    providerMetadata: Record<string, any>;
    rowKeyValue: string;
    rowKeyType: string;
    rowKeyX?: number;
    rowKeyY: number;
    secondaryRowKey: string;
    throwUnidentifiedRowError: boolean;
    range: string;
    pageName: string;
    rows: CsvRow[];
    pipelineNodes: PipelineNode[];
    repositories: Repository[];
    createdAt: string;
    updatedAt: string;
}
