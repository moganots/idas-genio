import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralUtils } from 'app/shared/app-shared.module';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit {
  @Input() public entityName: string;
  @Input() public pageIcon: string;
  @Input() public pageName: string;
  @Input() public pageTitle: string;
  @Input() public pageSubTitle: string;
  @Input() public hideButtonCreate = true;
  @Input() public hideButtonRefresh = true;
  @Input() public hideButtonSave = true;
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getButtonTitle(action: string) {
    switch (GeneralUtils.toLocalLowerCaseWithTrim(action)) {
      case `add`:
      case `create`:
        return `Add / Create a New ${this.formatDisplayEntityName()}`;
      case `refresh`:
        return `Refresh ${this.formatDisplayEntityName()}(s) Data View`;
      case `save`:
        return `Save ${this.formatDisplayEntityName()} Change(s)`;
    }
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

  onClickCreate() {
    this.create.emit();
  }

  onClickDataRefresh() {
    this.refresh.emit();
  }

  onClickSave() {
    this.save.emit()
  }
}
