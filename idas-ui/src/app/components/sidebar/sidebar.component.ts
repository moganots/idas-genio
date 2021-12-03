import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/app-shared.module';
import { CommonComponent } from 'app/shared/components/app-shared-components.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService
  ]
})
export class SidebarComponent extends CommonComponent {
  menuItems: any[];

  constructor(
    public router: Router,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService
    ) {
    super(router, alertifyService, authenticationService, lookupValueService);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
}
