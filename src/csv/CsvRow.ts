import { Csv } from '.'

export interface CsvRow {
  id: string
  order: number
  uniqId: string
  isLabel: boolean
  data: any

  csv: Csv
  csvId: string

  createdAt: string
  updatedAt: string
}