import { CsvCellChange } from ".";

export interface CsvRowChange {
  id?: string;
  y: number;
  oldY?: number;
  rowKey: string;
  code: string;
  indexesChanged: number[];
  original?: any[];
  cells: any[];
}
