import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { User } from '../../models/user';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: User;
  identity;
  token;
  errorMessage;

  LoginFormControl = new FormControl('', [
    Validators.required,
  ]);
  

  constructor(
    private userservicces:UserService, private router:Router
  ) { 
    this.user = new User('','','','','','')
  }
  
  onSubmit(){
    this.userservicces.signup(this.user).subscribe(
      res =>{
        var identity = res['user'];
        this.identity = identity;
        console.log(identity);
        if(this.identity.id != null){
          alert('El usuario no esta correctamente identificado');
        }else{
          //localStorage.setItem('identity', JSON.stringify(identity));
        }

        this.userservicces.signup(this.user, 'true').subscribe(
          res =>{
            var token = res['token'];
            this.token = token;
            this.router.navigateByUrl('/guni');

            if(this.token.length < 1){
              alert('El token no se ha generedo correctamente');
            }else{
              localStorage.setItem('token', token);
            }
          },e => {
            var errorMessage = <any> e;
            if(errorMessage != null){
              this.errorMessage = e.error.message;
            }
          }
        )

      },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            this.errorMessage = e.error.message;
          }
        }
    );
  }

  ngOnInit() {
    this.identity = this.userservicces.getIdentity();
    this.token = this.userservicces.getToken();
  }

}