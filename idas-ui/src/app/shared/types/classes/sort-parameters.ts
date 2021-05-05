import { SortParameters as SortParametersInterface } from '../interfaces/sort-parameters';

export class SortParameters implements SortParametersInterface {

    readonly array: any[];
    readonly byProperty: string;
    readonly thenByProperty?: string;

    constructor(array: any[], byProperty: string, thenByProperty?: string) {
      this.array = array;
      this.byProperty = byProperty;
      this.thenByProperty = thenByProperty;
    }

  }
