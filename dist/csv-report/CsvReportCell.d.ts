import { CsvReportCellType } from ".";
export type CsvReportCellData = Record<string, CsvReportCell>;
export type CsvReportCellConditionType = "gt" | "lt" | "eq" | "gte" | "lte" | "def" | "undef";
export type CsvReportCellConditionRelation = "and" | "or" | "xor";
export interface CsvReportCellCondition {
    p: string;
    v: string;
    c: CsvReportCellConditionType;
    r?: CsvReportCellConditionRelation;
}
export interface CsvReportCell {
    y: number;
    x: number;
    t: CsvReportCellType | null;
    v?: any;
    d?: string | number;
    p?: string;
    a?: string;
    bp?: string;
    s?: string;
    c?: CsvReportCellCondition[];
}
