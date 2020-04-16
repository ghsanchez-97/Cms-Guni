import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { CmsComponent } from './Component/cms/cms.component';
import { GuniComponent } from './Component/guni/guni.component';

import { RegisterComponent } from './Component/Register/register/register.component';
import { CreatUserComponent } from './Component/Register/creat-user/creat-user.component';

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
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
