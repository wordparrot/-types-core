import { CsvReportCellType } from ".";

export type CsvReportCellData = Record<string, CsvReportCell>;

export interface CsvReportCell {
  y: number; // y-index
  x: number; //  x-index
  v: any; // value
  t: CsvReportCellType; // type
  d?: string | number; // ISO or timestamp representing a date. Also accepts special value strings like 'today' or 'one week ago'.
  p?: string; // property
  a?: string; // property alias
  bk?: boolean; // by key? - print the rowKey of a matching row, instead of the value itself.
  bp?: string; // by property? - print the value of a matching row's property, instead of the value itself. For example, 'title' for a movie that has max viewers among a set.
  s?: string; // separator, such as a hyphen, comma, semicolon, or slash
}
