import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{ 

  constructor(private auth: UserService, private router: Router) { }

  canActivate(){
    if(!this.auth.getToken()){
      this.router.navigate(['']);
      return false
    }
    return true
  }
  
}
