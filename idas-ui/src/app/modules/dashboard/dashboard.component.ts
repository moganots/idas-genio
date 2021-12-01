import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import * as Chartist from 'chartist';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { DashboardService } from './services/dashboard.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    DashboardService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DashboardComponent extends PageComponent implements OnInit {
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dashboardService: DashboardService
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
  }

  startAnimationForLineChart(chart) {
    // tslint:disable-next-line:one-variable-per-declaration
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    // tslint:disable-next-line:only-arrow-functions
    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart) {
    // tslint:disable-next-line:one-variable-per-declaration
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    // tslint:disable-next-line:only-arrow-functions
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq2 = 0;
  }
  ngOnInit() {
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [[12, 17, 7, 17, 23, 18, 38]],
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    // tslint:disable-next-line:prefer-const
    let dailySalesChart = new Chartist.Line(
      '#dailySalesChart',
      dataDailySalesChart,
      optionsDailySalesChart
    );

    this.startAnimationForLineChart(dailySalesChart);

    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [[230, 750, 450, 300, 280, 240, 200, 190]],
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const completedTasksChart = new Chartist.Line(
      '#completedTasksChart',
      dataCompletedTasksChart,
      optionsCompletedTasksChart
    );

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);

    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    const datawebsiteViewsChart = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
    };
    const optionswebsiteViewsChart = {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };
    const responsiveOptions: any[] = [
      [
        'screen and (max-width: 640px)',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc(value) {
              return value[0];
            },
          },
        },
      ],
    ];
    const websiteViewsChart = new Chartist.Bar(
      '#websiteViewsChart',
      datawebsiteViewsChart,
      optionswebsiteViewsChart,
      responsiveOptions
    );

    // start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  }
}
