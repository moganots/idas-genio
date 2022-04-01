import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/services/reference-value-service/reference-value.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { BaseComponent } from '../../base-component/base.component';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss'],
  providers: [AlertifyService, AuthenticationService, LookupValueService],
})
export class DialogHeaderComponent extends BaseComponent implements OnInit {
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  constructor(
    router: Router,
    matDialog: MatDialog,
    alertifyService: AlertifyService,
    authenticationService: AuthenticationService,
    lookupValueService: LookupValueService,
    referenceValueService: ReferenceValueService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
  }

  ngOnInit(): void {}

  onButtonClickCloseDialog() {
    this.closeDialog.emit({});
  }
}
