import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  DataService,
  GeneralUtils,
  SharedConfiguration,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() public entityName: string;
  @Input() public dataService: DataService;
  @Input() public pageIcon: string;
  @Input() public pageName: string;
  @Input() public pageTitle: string;
  @Input() public pageSubTitle: string;
  @Input() public canCreate = false;
  @Input() public canView = false;
  @Input() public canEdit = false;
  @Input() public canDelete = false;
  @Input() public canSave = false;
  @Input() public canRefresh = false;
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getButtonTitle(action: string) {
    const fden = this.formatDisplayEntityName();
    const laction = GeneralUtils.toLocaleLowerCaseWithTrim(action);
    const caction = GeneralUtils.capitalizeFirstLetter(action);
    return SharedConfiguration.optionsCreate.includes(laction)
      ? `Add / Create a New ${fden}`
      : SharedConfiguration.optionsView.includes(laction)
      ? `${caction} ${fden} View`
      : SharedConfiguration.optionsUpdate.includes(laction)
      ? `${caction} ${fden} Change(s)`
      : SharedConfiguration.optionsDelete.includes(laction)
      ? `${caction} ${fden}`
      : ``;
  }
  formatDisplayEntityName() {
    return GeneralUtils.flattenArray(
      this.entityName
        ?.split(`-`)
        ?.map((e) => GeneralUtils.splitCamelCase(e)?.split(` `))
    )
      ?.map((e) => GeneralUtils.capitalizeFirstLetter(e))
      .join(` `);
  }
  onButtonButtonClickCreate() {
    this.create.emit();
  }
  onButtonButtonClickEdit(element: any, index?: number) {
    this.edit.emit({ index, element });
  }
  onButtonButtonClickDelete(element: any, index?: number) {
    this.delete.emit({ index, element });
  }
  onButtonButtonClickSave() {
    this.save.emit();
  }
  onButtonClickRefresh() {
    this.refresh.emit();
  }
}
