import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService, CommonComponent } from 'app/shared/shared.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [AuthenticationService]
})
export class FooterComponent extends CommonComponent implements OnInit {
  test : Date = new Date();

  constructor(
    public location: Location,
    public router: Router,
    public authenticationService: AuthenticationService
    ) {
    super(location, router, authenticationService);
  }

  ngOnInit() {
  }

}
