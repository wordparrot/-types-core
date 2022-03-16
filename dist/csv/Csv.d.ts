import { CsvRow } from ".";
import { PipelineNode } from "..";
export interface Csv {
    id: string;
    uniqId: string;
    rowKeyValue: string;
    rowKeyType: string;
    rowKeyX?: number;
    rowKeyY: number;
    secondaryRowKey: string;
    filename: string;
    url: string;
    provider: string;
    providerMetadata: Record<string, any>;
    page: number;
    rows: CsvRow[];
    pipelineNode: PipelineNode;
    pipelineNodeId: string;
    createdAt: string;
    updatedAt: string;
}
