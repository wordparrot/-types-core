import { CsvReportCellType } from ".";
export declare type CsvReportCellData = Record<string, CsvReportCell>;
export interface CsvReportCellCondition {
    p: string;
    v: string;
    c: 'gt' | 'lt' | 'eq' | 'gte' | 'lte';
    r?: 'and' | 'or' | 'xor';
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
    c?: CsvReportCellCondition[];
}
