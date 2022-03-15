import { DynamicServiceBodyConfig } from ".."
import { CsvRowChange } from "./CsvRowChange"

export interface CsvMetadata {
    csvId?: string
    changes: CsvRowChange[]
    run: DynamicServiceBodyConfig[]
}