import { DynamicServiceBodyConfig } from "..";
import { CsvCellChange } from "./CsvCellChange";
export interface CsvMetadata {
    csvId: string;
    changes: CsvCellChange[];
    run: DynamicServiceBodyConfig[];
}
