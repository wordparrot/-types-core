export interface CsvCellChange {
    x: number;
    y: number;
    oldValue: unknown;
    newValue: unknown;
    code: string;
    isRowKey: boolean;
}
