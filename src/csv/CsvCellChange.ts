export interface CsvCellChange {
    x: number
    y: number
    oldValue: any
    newValue: any
    code: string
    isRowKey: boolean
}