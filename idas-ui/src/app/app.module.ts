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
import { AppModulesModule } from './modules/app-modules.module';
import { AppModulesSharedModule } from './modules/_shared/app-modules-shared.module';
import { AppSharedModule } from './shared/app-shared.module';
import { AppMainComponent, AppMainLoginComponent } from './layouts/app-main/app-main.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    AppSharedModule,
    ComponentsModule,
    AppModulesSharedModule,
    AppModulesModule,
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
