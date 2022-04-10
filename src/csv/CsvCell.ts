export type CsvCellData = Record<string, CsvCell>;

export interface CsvCell {
  x: number;
  y: number;
  v: any;
}
