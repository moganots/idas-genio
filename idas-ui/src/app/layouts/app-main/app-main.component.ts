import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from 'jquery';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { CommonComponent } from 'app/shared/components/app-shared-components.module';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
  providers: [AlertifyService, AuthenticationService, LookupValueService],
})
export class AppMainComponent
  extends CommonComponent
  implements OnInit, AfterViewInit
{
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(
    public router: Router,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    private location: Location
  ) {
    super(router, alertifyService, authenticationService, lookupValueService);
    this.applicationHostName = this.getApplicationHostName();
  }

  ngOnInit() {
    const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (
      isWindows &&
      !document
        .getElementsByTagName('body')[0]
        .classList.contains('sidebar-mini')
    ) {
      // if we are on windows OS we activate the perfectScrollbar function

      document
        .getElementsByTagName('body')[0]
        .classList.add('perfect-scrollbar-on');
    } else {
      document
        .getElementsByTagName('body')[0]
        .classList.remove('perfect-scrollbar-off');
    }
    const elemMainPanel = document.querySelector('.main-panel') as HTMLElement;
    const elemSidebar = document.querySelector(
      '.sidebar .sidebar-wrapper'
    ) as HTMLElement;

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url !== this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else window.scrollTo(0, 0);
      }
    });
    if (
      this.isLoggedIn() &&
      elemMainPanel &&
      elemSidebar &&
      window.matchMedia(`(min-width: 960px)`).matches &&
      !this.isMac()
    ) {
      let ps = new PerfectScrollbar(elemMainPanel);
      ps = new PerfectScrollbar(elemSidebar);
    }

    // tslint:disable-next-line:variable-name
    const window_width = $(window).width();
    const $sidebar = $('.sidebar');
    // tslint:disable-next-line:variable-name
    const $sidebar_responsive = $('body > .navbar-collapse');
    // tslint:disable-next-line:variable-name
    const $sidebar_img_container = $sidebar.find('.sidebar-background');

    if (window_width > 767) {
      if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
        $('.fixed-plugin .dropdown').addClass('open');
      }
    }

    $('.fixed-plugin a').click(function (event) {
      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
      if ($(this).hasClass('switch-trigger')) {
        if (event.stopPropagation) {
          event.stopPropagation();
        } else if (window.event) {
          window.event.cancelBubble = true;
        }
      }
    });

    $('.fixed-plugin .badge').click(function () {
      // tslint:disable-next-line:variable-name

      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      // tslint:disable-next-line:variable-name
      const new_color = $(this).data('color');

      if ($sidebar.length !== 0) {
        $sidebar.attr('data-color', new_color);
      }

      if ($sidebar_responsive.length !== 0) {
        $sidebar_responsive.attr('data-color', new_color);
      }
    });

    $('.fixed-plugin .img-holder').click(function () {
      // tslint:disable-next-line:variable-name
      const $full_page_background = $('.full-page-background');

      $(this).parent('li').siblings().removeClass('active');
      $(this).parent('li').addClass('active');

      // tslint:disable-next-line:variable-name
      const new_image = $(this).find('img').attr('src');

      if ($sidebar_img_container.length !== 0) {
        // tslint:disable-next-line:only-arrow-functions
        $sidebar_img_container.fadeOut('fast', function () {
          $sidebar_img_container.css(
            'background-image',
            'url("' + new_image + '")'
          );
          $sidebar_img_container.fadeIn('fast');
        });
      }

      if ($full_page_background.length !== 0) {
        // tslint:disable-next-line:only-arrow-functions
        $full_page_background.fadeOut('fast', function () {
          $full_page_background.css(
            'background-image',
            'url("' + new_image + '")'
          );
          $full_page_background.fadeIn('fast');
        });
      }

      if ($sidebar_responsive.length !== 0) {
        $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
      }
    });
  }
  ngAfterViewInit() {
    this.runOnRouteChange();
  }
  isMaps(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path === titlee) {
      return false;
    } else {
      return true;
    }
  }
  runOnRouteChange(): void {
    if (
      this.isLoggedIn() &&
      window.matchMedia(`(min-width: 960px)`).matches &&
      !this.isMac()
    ) {
      const elemMainPanel = document.querySelector(
        '.main-panel'
      ) as HTMLElement;
      if (elemMainPanel) {
        const ps = new PerfectScrollbar(elemMainPanel);
        if (ps) {
          ps.update();
        }
      }
    }
  }
  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
      navigator.platform.toUpperCase().indexOf('IPAD') >= 0
    ) {
      bool = true;
    }
    return bool;
  }
  getApplicationHostName(): string {
    const url = this.getApplicationUrl();
    let hostname;
    // find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return (hostname || ``).toLocaleLowerCase().trim();
  }
  getApplicationUrl() {
    const angularRoute = this.location.path();
    const url = window.location.href;
    return url.replace(angularRoute, ``);
  }
}
