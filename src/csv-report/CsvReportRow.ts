import { CsvReport } from ".";
import { CsvReportCellType } from ".";
import { CsvReportCell } from ".";

export interface CsvReportRow {
  id: string;
  y: number;
  x: number;
  isLabel: boolean;
  data: Record<string, CsvReportCell>;
  providerMetadata: Record<string, any>;

  csvReport: CsvReport;
  csvReportId: string;

  createdAt: string;
  updatedAt: string;
}
