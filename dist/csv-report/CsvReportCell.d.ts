import { CsvReportCellType } from ".";
export declare type CsvReportCellData = Record<string, CsvReportCell>;
export interface CsvReportCell {
    y: number;
    x: number;
    v: any;
    t: CsvReportCellType;
    p?: string;
    a?: string;
    b?: boolean;
}
