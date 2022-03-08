import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupCategory } from 'app/shared/domain-models/lookups/lookup-category';
import { LookupValue } from 'app/shared/domain-models/lookups/lookup-value';
import { DefaultObjectUtil } from 'app/shared/utilities/default-object-util';
import { AuthenticationService } from 'app/shared/services/authentication-service/authentication.service';
import { DataService } from 'app/shared/services/data-service/data.service';
import { LookupCategoryService } from 'app/shared/services/lookup-category-service/lookup-category.service';
import { LookupValueConfiguration } from './lookup-value-configuration';
import { GeneralUtils } from 'app/shared/utilities/general-utils';

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
    this.dataColumns = LookupValueConfiguration.dataColumns;
    this.lookupCategoryService
      .getAll<LookupCategory>()
      // .toPromise()
      .subscribe((categories) => {
        this.lookupCategories = categories;
      });
  }
  mapValues(lookupValue: LookupValue) {
    lookupValue.LookupCategory =
      this.lookupCategories.find(
        (category) => category?._id === lookupValue?.LookupCategoryId
      ) || DefaultObjectUtil.noLookupCategory();
    lookupValue.CssColorCategory = this.getCssColorCategory(lookupValue);
    lookupValue.CssClassCategory = this.getCssClassCategory(lookupValue);
    lookupValue.CssColorValue = this.getCssColorValue(lookupValue);
    lookupValue.CssClass = this.getCssClass(lookupValue);
    lookupValue.Icon = lookupValue.Icon;
    return lookupValue;
  }
  getCssClassCategory(value: LookupValue) {
    return this.getCssClassFrom(value?.LookupCategory?.Name);
  }
  getCssColorCategory(value: LookupValue) {
    return `$idas-color-${this.getCssClassCategory(value)}`;
  }
  getCssClass(value: LookupValue) {
    return this.getCssClassFrom(value?.Value || value?.Value2 || value?.Value3);
  }
  getCssColorValue(value: LookupValue) {
    return `${this.getCssColorCategory(value)}-${this.getCssClass(value)}`;
  }
  getCssClassFrom(value: string) {    ;
    return GeneralUtils.toLocalLowerCaseWithTrim(GeneralUtils.splitJoin(value, ` `, `-`));
  }
}
