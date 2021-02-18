export namespace Main {
  export enum ColumnType {
    Text='text',
    Currency='currency',
    Date='date',
    Input='input'
  }

  export interface TableColumn {
    id: string;
    field: string;
    type: ColumnType;
    title: string;
  }

  export interface TableRow {
    [key: string]: string | number | Date;
  }
}
