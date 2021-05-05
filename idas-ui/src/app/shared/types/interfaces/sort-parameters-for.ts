import { SortParameters } from './sort-parameters';

export interface SortParametersFor<T> extends SortParameters {
  readonly array: T[];
}
