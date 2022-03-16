import { Csv } from '.';
export interface CsvRow {
    id: string;
    y: number;
    uniqId: string;
    isLabel: boolean;
    data: any;
    providerMetadata: Record<string, any>;
    csv: Csv;
    csvId: string;
    createdAt: string;
    updatedAt: string;
}
