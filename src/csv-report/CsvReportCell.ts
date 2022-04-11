import { CsvReportCellType } from ".";

export type CsvReportCellData = Record<string, CsvReportCell>;

export interface CsvReportCell {
  y: number; // y-index
  x: number; //  x-index
  v: any; // value
  t: CsvReportCellType; // type
  p?: string; // property
  a?: string; // property alias
  b?: boolean; // by key? - print the rowKey of a matching row, instead of the value itself.
}
