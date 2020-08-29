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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatRadioModule} from '@angular/material/radio';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { LoginComponent } from './Component/login/login.component';
import { CmsComponent } from './Component/cms/cms.component';
import { GuniComponent } from './Component/guni/guni.component';

import { RegisterComponent } from './Component/Register/register/register.component';
import { CreatUserComponent } from './Component/Register/creat-user/creat-user.component';
import { ListUsersComponent } from './Component/Register/list-users/list-users.component';
import { UpdateComponent } from './Component/Register/update/update.component';

import { EventComponent } from './Component/Event/event/event.component';
import { CreatEventComponent } from './Component/Event/creat-event/creat-event.component';
import { ListEventComponent } from './Component/Event/list-event/list-event.component';
import { EventEditComponent } from './Component/Event/event-edit/event-edit.component';

import { NewNwComponent } from './Component/new/new-nw/new-nw.component';
import { NewComponent } from './Component/new/new/new.component';
import { NewListComponent } from './Component/new/new-list/new-list.component';
import { NewEditComponent } from './Component/new/new-edit/new-edit.component';
import { NewViewComponent } from './Component/new/new-view/new-view.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CmsComponent,
    GuniComponent,
    RegisterComponent,
    CreatUserComponent,
    ListUsersComponent,
    UpdateComponent,
    EventComponent,
    CreatEventComponent,
    ListEventComponent,
    EventEditComponent,
    NewNwComponent,
    NewComponent,
    NewListComponent,
    NewEditComponent,
    NewViewComponent
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
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    MatRadioModule,
    RichTextEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
