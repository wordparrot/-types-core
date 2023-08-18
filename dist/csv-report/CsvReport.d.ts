import { CsvReportRow } from ".";
import { PipelineNode } from "..";
import { Repository } from "..";
export interface CsvReport {
    id: string;
    title: string;
    filename: string;
    content: string;
    version: string;
    url: string;
    page: number;
    saveReports: boolean;
    provider: string;
    providerMetadata: Record<string, any>;
    orientation: "h" | "v";
    convertedFrom: "csv" | "json";
    format: string;
    rows: CsvReportRow[];
    pipelineNodes: PipelineNode[];
    repository?: Repository;
    repositoryId?: string;
    pipelineFlow?: string;
    createdAt: string;
    updatedAt: string;
}
