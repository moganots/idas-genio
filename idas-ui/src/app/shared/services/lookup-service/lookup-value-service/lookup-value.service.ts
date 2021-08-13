import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupCategory } from 'app/shared/domain-models/lookup-models/lookup-category';
import { LookupValue } from 'app/shared/domain-models/lookup-models/lookup-value';
import { DefaultObjectUtil } from 'app/shared/utilities/default-object-util';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { AuthenticationService } from '../../authentication-service/authentication.service';
import { DataService } from '../../data-service/data.service';
import { LookupCategoryService } from '../lookup-category-service/lookup-category.service';
import { LookupValueConfiguration } from './lookup-value-configuration';

@Injectable({
  providedIn: 'root',
})
export class LookupValueService extends DataService {
  lookupCategories: LookupCategory[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupCategoryService: LookupCategoryService
  ) {
    super(httpClient, authenticationService);
    this.entityName = LookupValueConfiguration.identifier;
    this.lookupCategoryService
      .getAll<LookupCategory>()
      .subscribe((categories) => {
        this.lookupCategories = categories;
      });
  }
  mapValues(value: LookupValue) {
    value.LookupCategory =
      this.lookupCategories.find(
        (category) => category._id === value.LookupCategoryId
      ) || DefaultObjectUtil.noLookupCategory();
    value.CssColorCategory = this.getCssColorCategory(value);
    value.CssClassCategory = this.getCssClassCategory(value);
    value.CssColorValue = this.getCssColorValue(value);
    value.CssClass = this.getCssClass(value);
    value.Icon = value.Icon;
    return value;
  }
  getCssColorCategory(value: LookupValue) {
    return `$idas-color-${this.getCssClassCategory(value)}`;
  }
  getCssClassCategory(value: LookupValue) {
    return GeneralUtils.toLocalLowerCaseWithTrim(
      (value.LookupCategory || {}).Name
    )
      .split(' ')
      .join('-');
  }
  getCssColorValue(value: LookupValue) {
    return `${this.getCssColorCategory(value)}-${this.getCssClass(value)}`;
  }
  getCssClass(value: LookupValue) {
    return GeneralUtils.toLocalLowerCaseWithTrim(
      value.Value || value.Value2 || value.Value3
    )
      .split(' ')
      .join('-');
  }
}
