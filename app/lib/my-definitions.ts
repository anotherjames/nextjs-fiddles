// Slightly awkward way to extend a primitive.
export type Cell = string & {
  title?: string
  className?: string
};

export type Header = Cell[];

export type Row = Cell[];

export interface TableData {
  header: Header
  rows: Row[]
}
