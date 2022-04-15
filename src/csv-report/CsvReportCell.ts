import { CsvReportCellType } from ".";

export type CsvReportCellData = Record<string, CsvReportCell>;

export type CsvReportCellConditionType = "gt" | "lt" | "eq" | "gte" | "lte";
export type CsvReportCellConditionRelation = "and" | "or" | "xor";

export interface CsvReportCellCondition {
  p: string; // relevant property
  v: string; // conditional value
  c: CsvReportCellConditionType; // condition (greater than, less than, equals, before, after)
  r?: CsvReportCellConditionRelation; // relation (AND, OR, XOR)
}

export interface CsvReportCell {
  y: number; // y-index
  x: number; //  x-index
  t: CsvReportCellType | null; // type
  v?: any; // value
  d?: string | number; // ISO or timestamp representing a date. Also accepts special value strings like 'today' or 'one week ago'.
  p?: string; // property
  a?: string; // property alias
  bp?: string; // by properties? - print the interpolated value of a property, such as `{total} - {name}`, instead of the value itself. For example, 'title' for a movie that has max viewers among a set.
  s?: string; // separator, such as a hyphen, comma, semicolon, or slash
  c?: CsvReportCellCondition[];
}
