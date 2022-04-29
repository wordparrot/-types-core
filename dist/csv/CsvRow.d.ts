import { Csv } from ".";
import { CsvCell } from ".";
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
    cellArray?: CsvCell[];
    csv: Csv;
    csvId: string;
    createdAt: string;
    updatedAt: string;
}
