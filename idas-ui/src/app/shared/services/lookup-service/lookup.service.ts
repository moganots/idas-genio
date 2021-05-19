import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupCategory } from 'app/shared/domain-models/lookup-models/lookup-category';
import { LookupValue } from 'app/shared/domain-models/lookup-models/lookup-value';
import { LookupCategoryService } from './lookup-category-service/lookup-category.service';
import { LookupValueService } from './lookup-value-service/lookup-value.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  lookupCategories = [];
  lookupValues = [];

  constructor(lookupCategoryService: LookupCategoryService, lookupValueService: LookupValueService) {
    this.lookupCategories = lookupCategoryService.getAll<LookupCategory>();
    this.lookupValues = lookupValueService.getAll<LookupValue>();
  }

  getAllCategories() {
    return this.lookupCategories.map((lc) => new LookupCategory(lc._id, lc.Code, lc.Name, lc.Description));
  }
  getCategoryById(categoryId: number) {
    return this.getAllCategories().find((lc) => lc._id === categoryId);
  }
  getCategoryByColumnName(column: any) {
    return this.getAllCategories().find((lc) => lc.Name === this.columnNameWithoutId(column));
  }
  columnNameWithoutId(column: any) {
    const columnName = (column.name || column).trim();
    return (columnName && columnName.toLocaleLowerCase().endsWith('id')) ? columnName.substring(0, columnName.length - 2) : columnName;
  }

  getAllLookupValues() {
    return this.lookupValues.map((lv) => new LookupValue(
      lv._id,
      this.getCategoryById(lv.LookupCategoryId),
      lv.Value,
      lv.Value2,
      lv.Value3,
      lv.Image,
      lv.Icon));
  }
  getLookupValueById(id: number) {
    return this.getAllLookupValues().find((lv) => lv._id === id);
  }
  getLookupValuesByCategory(category: LookupCategory) {
    return this.filteredLookupValuesByCategory(category);
  }
  getLookupValuesByCategoryId(categoryId: number) {
    return this.filteredLookupValuesByCategory(categoryId);
  }
  getLookupValuesByColumnName(column: any) {
    return this.filteredLookupValuesByCategory(this.columnNameWithoutId(column));
  }
  getLookupValueIdByCategoryAndValue(category: string, value: any): any {
    return this.getAllLookupValues().find((lv) =>
      this.toLocaleLowerCaseTrim(lv.lookupCategory.Name) === this.toLocaleLowerCaseTrim(category)
      && this.toLocaleLowerCaseTrim(lv.value) === this.toLocaleLowerCaseTrim(value))._id;
  }
  private filteredLookupValuesByCategory(filterValue: any) {
    return this.getAllLookupValues().filter(this.predicateCategory(filterValue));
  }
  private predicateCategory(filterValue: any): (value: LookupValue, index: number, array: LookupValue[]) => boolean {
    return (lv) =>
      (lv.lookupCategory)
      && ((lv.lookupCategory._id === filterValue)
      || (this.toLocaleLowerCaseTrim(lv.lookupCategory.Name) === this.toLocaleLowerCaseTrim(filterValue)));
  }
  private toLocaleLowerCaseTrim(value: any){
    return (value || '').toString().toLocaleLowerCase().trim();
  }

}
