import { CsvReportCellType } from ".";
export declare type CsvReportCellData = Record<string, CsvReportCell>;
export interface CsvReportCell {
    y: number;
    x: number;
    v: any;
    t: CsvReportCellType;
    d?: string | number;
    p?: string;
    a?: string;
    bk?: boolean;
    bp?: string;
    s?: string;
}
