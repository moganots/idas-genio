import { trigger, transition, query, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('navigationAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          style({
            opacity: 0,
            position: 'fixed',
            width: '100%'
          }),
          { optional: true }
        ),
        query(
          ':leave',
          animate(
            '0s ease-in-out',
            style({
              opacity: 0,
              position: 'fixed',
              width: '100%'
            })
          ),
          { optional: true }
        ),
        query(
          ':enter',
          animate(
            '.5s ease-in',
            style({
              opacity: 1
            })
          ),
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {
  title = `${environment.companyName} - ${environment.applicationName}`;
}
