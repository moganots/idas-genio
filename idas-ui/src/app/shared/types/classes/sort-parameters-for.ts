import { SortParametersFor as SortParametersForInterface } from '../interfaces/sort-parameters-for';

export class SortParametersFor<T> implements SortParametersForInterface<T> {

    readonly array: T[];
    readonly byProperty: string;
    readonly thenByProperty?: string;

    constructor(array: T[], byProperty: string, thenByProperty?: string) {
      this.array = array;
      this.byProperty = byProperty;
      this.thenByProperty = thenByProperty;
    }

  }
