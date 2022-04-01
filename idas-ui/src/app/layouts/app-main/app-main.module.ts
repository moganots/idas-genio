import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { AppMainRoutes } from './app-main.routing';
import { AppModulesModule } from 'app/modules/app-modules.module';
import { DialogCreateEditDataComponent } from 'app/modules/_shared/app-modules-shared.module';
import { MatIconModule } from '@angular/material/icon';

export { AppMainLoginComponent } from './app-main-login/app-main-login.component';
export { AppLoginConfiguration } from './app-main-login/app-login-configuration';
export { AppMainComponent } from './app-main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppMainRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    AppModulesModule
  ],
  declarations: [],
  entryComponents: []
})
export class AppMainModule {}
