import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

import { AuthService } from './Services/auth.service';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'guni',
    component: GuniComponent,
    canActivate: [AuthService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthService]
  },
  {
    path:'Create-User',
    component:CreatUserComponent,
    canActivate: [AuthService]
  },
  {
    path:'List-User',
    component: ListUsersComponent,
    canActivate: [AuthService]
  },
  {
    path:'Update-User/:id',
    component: UpdateComponent,
    canActivate: [AuthService]
  },
  {
    path: 'event',
    component: EventComponent,
    canActivate: [AuthService]
  },
  {
    path: 'new-event',
    component: CreatEventComponent,
    canActivate: [AuthService]
  },
  {
    path: 'list-event',
    component: ListEventComponent,
    canActivate: [AuthService]
  },
  {
    path: 'event-edit/:id',
    component: EventEditComponent,
    canActivate: [AuthService]
  },
  {
    path: 'New',
    component: NewComponent,
    canActivate: [AuthService]
  },
  {
    path: 'new-nw',
    component: NewNwComponent,
    canActivate: [AuthService]
  },
  {
    path: 'list-new',
    component: NewListComponent,
    canActivate: [AuthService]
  },
  
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
