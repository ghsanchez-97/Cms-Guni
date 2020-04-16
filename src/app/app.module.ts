import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './Component/login/login.component';
import { CmsComponent } from './Component/cms/cms.component';
import { GuniComponent } from './Component/guni/guni.component';

import { RegisterComponent } from './Component/Register/register/register.component';
import { CreatUserComponent } from './Component/Register/creat-user/creat-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CmsComponent,
    GuniComponent,
    RegisterComponent,
    CreatUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
