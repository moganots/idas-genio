import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponentsRoutes } from '../app-components-routes';
import { AuthenticationService, CommonComponent } from 'app/shared/shared.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthenticationService]
})
export class NavbarComponent extends CommonComponent implements OnInit {
    private listTitles: any[];
    // tslint:disable-next-line:variable-name
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(
        public location: Location,
        public router: Router,
        public authenticationService: AuthenticationService,
        private element: ElementRef
        ) {
        super(location, router, authenticationService);
          this.sidebarVisible = false;
    }

    ngOnInit(){
      this.listTitles = AppComponentsRoutes.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         // tslint:disable-next-line:prefer-const
         let $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function(){
            if(toggleButton){ toggleButton.classList.add('toggled'); }
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        const $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($toggle) {
                $toggle.remove();
            }
            // tslint:disable-next-line:only-arrow-functions
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            // tslint:disable-next-line:only-arrow-functions
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            const $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (this.isLoggedIn() && body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }else if (this.isLoggedIn() && body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            // tslint:disable-next-line:only-arrow-functions
            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { // asign a function
              body.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              // tslint:disable-next-line:only-arrow-functions
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle(){
      let titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
        titlee = titlee.slice(2);
      }

      // tslint:disable-next-line:prefer-for-of
      for(let item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
}
