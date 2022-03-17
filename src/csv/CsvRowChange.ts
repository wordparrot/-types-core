import { CsvCellChange } from "."

export interface CsvRowChange {
    y: number
    rowKey: string
    code: string
    indexesChanged?: number[]
    original?: any[]
    cells: any[]
}