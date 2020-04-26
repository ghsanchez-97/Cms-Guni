import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { Register } from '../../../models/register';
import { User } from '../../../models/user';
import { UserService } from '../../../Services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css'],
  providers: [UserService]
})
export class CreatUserComponent implements OnInit {

  hide = true;
  errorMessage;
  alertMessage;
  user = User;
  token;
  register = new Register('','','','','','','',''); 

  RegisterFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private userservicces:UserService, private router:Router
  ) {
    this.token = this.userservicces.getToken();
   }

  ngOnInit() {
  }

  onSubmitRg(){
    console.log(this.register);

    this.userservicces.register(this.register, this.token).subscribe(
      res =>{
        var user = res['user'];
        this.register = user;

        if(!user.id){
          this.alertMessage = 'Error al Registar'
        }
        this.router.navigateByUrl('/register');

      },e =>{
        var errorMessage = <any>e;
          if(errorMessage != null){
          //this.errorMessage = e.error.message;
          console.log(e)
          }
      }
    );
  }

}
