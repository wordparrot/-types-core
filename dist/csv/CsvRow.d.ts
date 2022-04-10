import { Csv } from ".";
export interface CsvRow {
    id: string;
    y: number;
    rowKey: string;
    isLabel: boolean;
    data: Record<string, {
        y: number;
        x: number;
        v: any;
    }>;
    providerMetadata: Record<string, any>;
    csv: Csv;
    csvId: string;
    createdAt: string;
    updatedAt: string;
}
