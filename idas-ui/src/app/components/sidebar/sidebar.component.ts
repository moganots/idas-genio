import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService, CommonComponent } from 'app/shared/shared.module';
import { AppComponentsRoutes } from '../app-components-routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [AuthenticationService]
})
export class SidebarComponent extends CommonComponent implements OnInit {
  menuItems: any[];

  constructor(
    public location: Location,
    public router: Router,
    public authenticationService:AuthenticationService
    ) {
    super(location, router, authenticationService);
  }

  ngOnInit() {
    this.menuItems = AppComponentsRoutes.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
