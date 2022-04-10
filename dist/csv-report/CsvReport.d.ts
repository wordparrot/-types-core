import { CsvReportRow } from ".";
import { PipelineNode } from "..";
import { Repository } from "..";
export interface CsvReport {
    id: string;
    title: string;
    filename: string;
    content: string;
    version: string;
    uniqId: string;
    rowKeyValue: string;
    rowKeyType: string;
    rowKeyX?: number;
    rowKeyY: number;
    secondaryRowKey: string;
    url: string;
    provider: string;
    providerMetadata: Record<string, any>;
    page: number;
    orientation: "h" | "v";
    convertedFrom: "csv" | "json";
    format: string;
    rows: CsvReportRow[];
    pipelineNodes: PipelineNode[];
    repositories: Repository[];
    createdAt: string;
    updatedAt: string;
}
