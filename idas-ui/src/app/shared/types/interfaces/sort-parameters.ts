 export interface SortParameters {
  readonly array: any[];
  readonly byProperty: string;
  readonly thenByProperty?: string;
  [propName: string]: any;
}
