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
  DataColumn,
  DataService,
  LookupValueService,
  SharedConfiguration,
} from 'app/shared/app-shared.module';
import { ReferenceValueService } from '../../services/reference-value-service/reference-value.service';
import { CommonComponent } from 'app/shared/components/app-shared-components.module';

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
  @Input() public pageSubTitle: string;
  @Input() public pageWidth = `38vw`;
  @Input() public entityName: string;
  @Input() public currentEntity: any;
  @Input() public currentEntityId: any;
  @Input() public dataService: DataService;
  @Input() public dataSource: any[] = [];
  @Input() public dataSourceColumns: DataColumn[];
  @Input() public action: string;
  @Input() public selectedElementIndex: number;
  @Input() public selectedElement: any = {};
  public matTableDataSource: MatTableDataSource<any[]>;
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
    if (this.matTableDataSource) {
      this.matTableDataSource.paginator = this.paginator;
      this.matTableDataSource.sort = this.sort;
    }
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
    return ((this.matTableDataSource || { data: this.dataSource }).data || []).indexOf(
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
  onButtonClickSave() {
    if (this.hasChanges() && this.dataService) {
      this.setChanges();
      this.dataService
        .CreateUpdateDelete(this.action, this.selectedElement)
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
      (key) => (this.selectedElement[key] = this.updates[key])
    );
  }
  onDataRefresh(): void {
    this.isLoading = true;
    this.dataSource = [];
    this.dataService
      .getAll()
      // .toPromise()
      .subscribe((data) => {
        this.matTableDataSource = new MatTableDataSource<any[]>();
        this.matTableDataSource.data = data || this.dataSource;
        this.matTableDataSource.paginator = this.paginator;
        this.matTableDataSource.sort = this.sort;
      });
    this.isLoading = false;
  }
}
