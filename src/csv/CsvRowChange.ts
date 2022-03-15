import { CsvCellChange } from "."

export interface CsvRowChange {
    order: number
    rowId?: string
    uniqId?: string
    uniqIdName?: string
    uniqIdType?: string
    changes: CsvCellChange[]
}