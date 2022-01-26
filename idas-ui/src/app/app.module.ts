import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AppComponentsModule } from './components/app-components.module';
import { AppMainComponent } from './layouts/app-main/app-main.component';
import { AppMainLoginComponent } from './layouts/app-main/app-main.module';
import { AppModulesModule } from './modules/app-modules.module';
import { AppModulesSharedModule } from './modules/_shared/app-modules-shared.module';
import { AppSharedModule } from './shared/app-shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    AppComponentsModule,
    AppModulesSharedModule,
    AppModulesModule,
    AppSharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppMainLoginComponent
   ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
