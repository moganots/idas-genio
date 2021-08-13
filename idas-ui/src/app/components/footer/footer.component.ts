import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService, AuthenticationService, CommonComponent, LookupValueService } from 'app/shared/shared.module';

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
