import { Injectable } from '@angular/core';
import { LookupCategory } from 'app/shared/domain-models/lookup-models/lookup-category';
import { LookupValue } from 'app/shared/domain-models/lookup-models/lookup-value';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { first } from 'rxjs/operators';
import { LookupCategoryService } from './lookup-category-service/lookup-category.service';
import { LookupValueService } from './lookup-value-service/lookup-value.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  lookupValues: LookupValue[] = [];

  constructor(public lookupCategoryService: LookupCategoryService, public lookupValueService: LookupValueService) {
    // tslint:disable-next-line:max-line-length
    this.lookupCategoryService.getAll<LookupCategory>().subscribe((categories) => {
      this.lookupValueService.getAll<LookupValue>().subscribe(values => {
        this.mapAndAddLookupValueCategory(categories, values);
      })
    });
  }
  mapAndAddLookupValueCategory(categories: LookupCategory[], values: LookupValue[]) {
    values.forEach((lookupValue) => {
      lookupValue.LookupCategory = categories.find((lc) => lc._id === lookupValue.LookupCategoryId);
      this.lookupValues.push(lookupValue);
    });
  }
  getAllLookupValues(){
    return this.lookupValues;
  }
  getLookupValueById(id: number) {
    return this.lookupValues.find((lv) => lv._id === id);
  }
  getLookupValuesByCategoryId(categoryId: number) {
    return this.lookupValues.filter((lv) => (lv.LookupCategoryId === categoryId));
  }
  getLookupValuesByCategory(category: LookupCategory) {
    return this.lookupValues.filter((lv) => (lv.LookupCategoryId === category._id));
  }
  getLookupValuesByColumn(column: any) {
    return this.getLookupValuesByColumnName(String(column.name || column.Name || column));
  }
  getLookupValuesByColumnName(columnName: string) {
    return this.filteredLookupValuesByCategoryName(columnName);
  }
  filteredLookupValuesByCategoryName(categoryName: string) {
    categoryName = this.columnNameWithoutId(categoryName);
    const values = this.lookupValues.filter((lookupValue) => { return lookupValue.LookupCategory.Name === categoryName; });
    return values;
  }
  columnNameWithoutId(column: any) {
    const columnName = String(column.name || column);
    return (this.toLocaleLowerCaseTrim(columnName).endsWith('id')) ? columnName.substring(0, columnName.length - 2) : columnName;
  }
  toLocaleLowerCaseTrim(value?: any) {
    return String(value).toLocaleLowerCase().trim();
  }
}