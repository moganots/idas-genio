import { Observable } from 'rxjs';
import { DataColumnUtils } from '../utilities/data-column-utils';
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
  lookupValues = [];
  filteredLookupValues: Observable<any>;
  value = null;

  constructor(dataColumn: any) {
    this.id = dataColumn.id;
    this.name = dataColumn.name;
    this.canShow = dataColumn.canShow;
    this.canEdit = DataColumnUtils.setCanEdit(this.name);
    this.canGroup = dataColumn.canGroup;
    this.canSort = dataColumn.canSort;
    this.displayName = GeneralUtils.formatDisplayColumnName(this.name);
    this.isRequired = DataColumnUtils.setIsRequired(this.name);
    this.controlType = DataColumnUtils.setControlType(this.name);
    this.selectOptionControlType = DataColumnUtils.setSelectOptionControlType(this.name);
  }
}
