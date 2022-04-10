import { CsvReport } from ".";
import { CsvReportCellType } from ".";

export interface CsvReportRow {
  id: string;
  y: number;
  rowKey: string;
  isLabel: boolean;
  data: Record<
    string,
    {
      y: number;
      x: number;
      v: any;
      t: CsvReportCellType;
      p: string;
    }
  >;
  providerMetadata: Record<string, any>;

  csvReport: CsvReport;
  csvReportId: string;

  createdAt: string;
  updatedAt: string;
}
