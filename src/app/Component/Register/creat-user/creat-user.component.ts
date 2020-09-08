import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

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
  token;
  user = new User('','','','','','','','','','');

  RegisterFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private userservices:UserService, private router:Router
  ) {
    this.token = this.userservices.getToken();
   }

  ngOnInit() {
  }

  onSubmitRg(){
    console.log(this.user);

    this.userservices.register(this.user, this.token).subscribe(
      res =>{
        var user = res['user'];
        this.user = user;

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
