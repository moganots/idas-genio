import { Injectable } from '@angular/core';
import { SortParametersFor } from '../../types/interfaces/sort-parameters-for';

@Injectable()
export class SortingService {

  constructor() { }

  sort<T>(sortParameters: SortParametersFor<T>): T[] {
    return sortParameters.byProperty.length ? sortParameters.array.slice().sort(by) : sortParameters.array;

    function by(a, b): number {
      // tslint:disable-next-line:one-variable-per-declaration
      let c = a, d = b;
      const byProp = sortParameters.byProperty.split('.');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < byProp.length; i++) {
        c = c[byProp[i]];
        d = d[byProp[i]];
      }

      if (c.toString().toLocaleLowerCase() > d.toString().toLocaleLowerCase()) {
        return 1;
      }
      if (c.toString().toLocaleLowerCase() < d.toString().toLocaleLowerCase()) {
        return -1;
      }
      if (sortParameters.thenByProperty && sortParameters.thenByProperty.length) {
        return thenBy(a, b);
      }
      return 0;
    }

    function thenBy(a, b): number {
      // tslint:disable-next-line:one-variable-per-declaration
      let c = a, d = b;
      const thenByProp = sortParameters.thenByProperty.split('.');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < thenByProp.length; i++) {
        c = c[thenByProp[i]];
        d = d[thenByProp[i]];
      }

      if (c.toString().toLocaleLowerCase() > d.toString().toLocaleLowerCase()) {
        return 1;
      }
      if (c.toString().toLocaleLowerCase() < d.toString().toLocaleLowerCase()) {
        return -1;
      }
      return 0;
    }
  }
}
