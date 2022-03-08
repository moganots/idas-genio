import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './layouts/app-main/app-main.module';

const routes: Routes = [
  {
    path: ``,
    component: AppMainComponent,
    children: [{
      path: ``,
      // loadChildren: () => import('./layouts/app-main/app-main.module').subscribe((m) => m.AppMainModule)
      loadChildren: './layouts/app-main/app-main.module#AppMainModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
