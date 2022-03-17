import { CsvRowChange, CsvDuplicate } from ".";
export interface CsvRowChangeReport {
    numberCreated: number;
    numberUpdated: number;
    numberDeleted: number;
    duplicates: CsvDuplicate[];
    rowChanges: CsvRowChange;
    error?: string;
}
