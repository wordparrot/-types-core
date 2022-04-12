import { CsvReportCellType } from ".";
export declare type CsvReportCellData = Record<string, CsvReportCell>;
export interface CsvReportCellCondition {
    p: string;
    v: string;
    c: string;
    r: string;
}
export interface CsvReportCell {
    y: number;
    x: number;
    t: CsvReportCellType | null;
    v?: any;
    d?: string | number;
    p?: string;
    a?: string;
    bk?: boolean;
    bp?: string;
    s?: string;
    c?: Record<string, CsvReportCellCondition>[];
}
