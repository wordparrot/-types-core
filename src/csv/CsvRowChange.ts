import { CsvCellChange } from "."

export interface CsvRowChange {
    y: number
    rowKey: string
    code: string
    original: any[][] | null
    cellChanges: CsvCellChange[]
}