import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {
  AlertifyService,
  AuthenticationService,
  CommonComponent,
  DataService,
  LookupValueService,
} from 'app/shared/shared.module';
import { SharedModulesModuleConfiguration } from '../../shared-modules-configuration';
import { ReferenceValueService } from '../../services/reference-value-service/reference-value.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    DataService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class BaseComponent extends CommonComponent implements AfterViewInit {
  @Input() public pageIcon: string;
  @Input() public pageName: string;
  @Input() public pageTitle: string;
  @Input() public entityName: string;
  @Input() public dataService: DataService;
  @Input() public sourceData: any[] = [];
  @Input() public sourceDataColumns: any[];
  @Input() public action: string;
  @Input() public selected: any = {};
  @Input() public selectedIndex: number;
  public dataSource: MatTableDataSource<any[]>;
  public updates: { [key: string]: any } = {};
  public form = new FormControl();
  public frmGroup: FormGroup;
  public frmGroupFields: FormGroup;
  isLoading = false;
  hasError = false;
  hasWarnings = false;
  hasCrashed = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
  ) {
    super(router, alertifyService, authenticationService, lookupValueService);
  }
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  isUseCheckbox(field: any) {
    return SharedModulesModuleConfiguration.checkboxColumns.includes(
      field.name || field
    );
  }
  isDateField(field: any) {
    return SharedModulesModuleConfiguration.dateColumns.includes(
      field.name || field
    );
  }
  isTimeField(field: any) {
    return SharedModulesModuleConfiguration.timeColumns.includes(
      field.name || field
    );
  }
  isNumberField(field: any) {
    return SharedModulesModuleConfiguration.numberColumns.includes(
      field.name || field
    );
  }
  isMaskedField(field: any) {
    return SharedModulesModuleConfiguration.maskedColumns.includes(
      field.name || field
    );
  }
  isTextAreaField(field: any) {
    return SharedModulesModuleConfiguration.textAreaColumns.includes(
      field.name || field
    );
  }
  isUseIcon(field: any) {
    return SharedModulesModuleConfiguration.useIconColumns.includes(
      field.name || field
    );
  }
  isUseImage(field: any) {
    return SharedModulesModuleConfiguration.useImageColumns.includes(
      field.name || field
    );
  }
  isUseBreakOrNewlineOrSection(field: any) {
    return SharedModulesModuleConfiguration.useBreakNewlineSectionColumns.includes(
      field.name || field
    );
  }
  isLookupOrReferenceValueField(field: any) {
    return this.isLookupValueField(field) || this.isReferenceValueField(field);
  }
  setSelectOptionControlType(field: any) {
    if (this.isReferenceValueField(field)) {
      field.selectOptionControlType = 'referenceValue';
    } else if (this.isUseIcon(field)) {
      field.selectOptionControlType = 'lookupIcon';
    } else if (this.isUseImage(field)) {
      field.selectOptionControlType = 'lookupImage';
    } else {
      field.selectOptionControlType = 'lookupValue';
    }
  }
  isLookupValueField(field: any) {
    return SharedModulesModuleConfiguration.lookupValueColumns.includes(
      field.name || field
    );
  }
  isReferenceValueField(field: any) {
    return SharedModulesModuleConfiguration.referenceValueColumns.includes(
      field.name || field
    );
  }
  formatDisplayColumnName(column: any): string {
    const columnName = this.columnNameWithoutId(column);
    switch (columnName) {
      case `EmployeeClientSupplier`:
        return this.splitCamelCase(columnName).split(' ').join(' / ');
      default:
        return this.splitCamelCase(columnName).split(' ').join(' ').trim();
    }
  }
  columnNameWithoutId(column: any) {
    const columnName = String(column.name || column.Name || column);
    if ([`_id`, `userid`].includes(this.toLocaleLowerCaseTrim(columnName))) {
      return columnName;
    }
    return this.toLocaleLowerCaseTrim(columnName).endsWith(`id`)
      ? columnName.substring(0, columnName.length - 2)
      : columnName;
  }
  getElementIndex(element: any): number {
    return ((this.dataSource || { data: this.sourceData }).data || []).indexOf(
      element
    );
  }
  openDialog(
    dialogComponent: any,
    data?: any,
    afterClosed?: () => void,
    height: string = '96vh',
    width: string = '38vw',
    top: string = '7vh'
  ): void {
    const left = '25vw';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.height = height;
    dialogConfig.maxHeight = '95%';
    dialogConfig.width = width;
    dialogConfig.panelClass = 'idas-dialog-container';
    dialogConfig.position = {
      left,
      top,
    };
    const matDialogSub = this.matDialog
      .open(dialogComponent, dialogConfig)
      .afterClosed()
      .subscribe({
        next: (result) => {},
        complete: () => {
          if (afterClosed) {
            afterClosed();
          }
        },
        error: (error) => {
          this.alertifyService.error(error.message || error);
        },
      });
  }
  isCreate() {
    return ['add', 'create', 'new'].includes(
      this.toLocaleLowerCaseTrim(this.action)
    );
  }
  isEdit() {
    return ['change', 'edit', 'update'].includes(
      this.toLocaleLowerCaseTrim(this.action)
    );
  }
  isDelete() {
    return [`archive`, 'delete', 'remove', 'deactivate'].includes(
      this.toLocaleLowerCaseTrim(this.action)
    );
  }
  onClickSave() {
    if (this.hasChanges() && this.dataService) {
      this.setChanges();
      this.dataService
        .CreateUpdateDelete(this.action, this.selected)
        .pipe(first())
        .subscribe({
          next: (result) => {
            this.alertifyService.success(
              `${this.action} completed, successfully`
            );
          },
          complete: () => {
            this.onDataRefresh();
          },
          error: (error) => {
            this.alertifyService.error(error.message || error);
          },
        });
    }
  }
  hasChanges() {
    return this.updates && Object.keys(this.updates).length !== 0;
  }
  setChanges() {
    Object.keys(this.updates).forEach(
      (key) => (this.selected[key] = this.updates[key])
    );
  }
  onDataRefresh(): void {
    this.isLoading = true;
    this.sourceData = [];
    this.dataService
      .getAll()
      .toPromise()
      .then((data) => {
        this.dataSource = new MatTableDataSource<any[]>();
        this.dataSource.data = data || this.sourceData;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    this.isLoading = false;
  }
}
