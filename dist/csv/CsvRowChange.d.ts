import { CsvCellChange } from ".";
export interface CsvRowChange {
    y: number;
    uniqId: string;
    code: string;
    cellChanges: CsvCellChange[];
}
