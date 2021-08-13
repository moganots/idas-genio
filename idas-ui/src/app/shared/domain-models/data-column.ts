import { Observable } from 'rxjs';
import { GeneralUtils } from '../utilities/general-utils';
export class DataColumn {
  id: number;
  name: string;
  canShow: boolean;
  canEdit: boolean;
  canGroup: boolean;
  canSort: boolean;
  displayName: string;
  isRequired: boolean;
  controlType: string;
  selectOptionControlType: string;
  lookupValues: any[];
  filteredLookupValues: Observable<any>;
  value: any;

  constructor(dataColumn: any) {
    this.id = dataColumn.id;
    this.name = dataColumn.name;
    this.canShow = dataColumn.canShow;
    this.canEdit = dataColumn.canEdit;
    this.canGroup = dataColumn.canGroup;
    this.canSort = dataColumn.canSort;
    this.displayName = GeneralUtils.formatDisplayColumnName(this.name);
    this.isRequired = dataColumn.isRequired;
    this.controlType = dataColumn.controlType;
    this.selectOptionControlType = dataColumn.selectOptionControlType;
    this.lookupValues = dataColumn.lookupValues;
    this.value = dataColumn.value;
  }
}
