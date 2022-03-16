import { CsvCellChange } from "."

export interface CsvRowChange {
    y: number
    rowKey: string
    code: string
    cellChanges: CsvCellChange[]
}