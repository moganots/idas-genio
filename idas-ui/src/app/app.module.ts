import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './components/components.module';
import { ClientsModule, DashboardModule, EmployeesModule, ModulesModule, SuppliersModule, UsersModule } from './modules/modules.module';
import { ModulesSharedModule } from './modules/_shared/modules-shared.module';
import { SharedModule } from './shared/shared.module';
import { AppMainComponent, AppMainLoginComponent } from './layouts/app-main/app-main.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    ComponentsModule,
    ModulesSharedModule,
    ClientsModule,
    DashboardModule,
    EmployeesModule,
    SuppliersModule,
    UsersModule,
    ModulesModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppMainLoginComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
