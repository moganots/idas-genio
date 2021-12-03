import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRoutesService } from './services/user-routes.service';
import { SidebarComponent } from './sidebar/sidebar.component';

export { FooterComponent } from './footer/footer.component';
export { NavbarComponent } from './navbar/navbar.component';
export { UserRoutesService } from './services/user-routes.service';
export { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  providers:[UserRoutesService]
})
export class AppComponentsModule { }
