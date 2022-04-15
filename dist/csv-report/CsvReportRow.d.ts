import { CsvReport } from ".";
import { CsvReportCell } from ".";
export interface CsvReportRow {
    id: string;
    y: number;
    rowKey: string;
    isLabel: boolean;
    data: Record<string, CsvReportCell>;
    providerMetadata: Record<string, any>;
    csvReport: CsvReport;
    csvReportId: string;
    createdAt: string;
    updatedAt: string;
}
