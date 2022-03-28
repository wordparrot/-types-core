import { DynamicServiceBodyConfig } from "..";
import { CsvRowChange } from "./CsvRowChange";
export interface CsvMetadata {
    id: string | null;
    title: string;
    content: string | null;
    uniqId: string;
    rowKeyValue: string;
    rowKeyType: string;
    rowKeyY: number;
    rowKeyX: number | null;
    secondaryRowKey: string | null;
    url: string | null;
    filename: string | null;
    page: number | null;
    pageName: string | null;
    provider: string | null;
    providerMetadata: Record<string, unknown> | null;
    pipelineNodeId?: string | null;
    pipelineJobId?: string | null;
    repositoryId?: string | null;
    csvArray?: unknown[][] | null;
    rowChanges?: CsvRowChange[];
    run?: DynamicServiceBodyConfig[];
}
