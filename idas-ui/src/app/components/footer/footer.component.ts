import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/app-shared.module';
import { CommonComponent } from 'app/shared/components/app-shared-components.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService
  ]
})
export class FooterComponent extends CommonComponent implements OnInit {
  todaysDate = Date.now();

  constructor(
    public router: Router,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService
    ) {
    super(router, alertifyService, authenticationService, lookupValueService);
  }

  ngOnInit() { }
}
