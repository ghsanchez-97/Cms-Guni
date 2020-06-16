import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { Register } from '../../../models/register';
import { UserService } from '../../../Services/user.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from 'src/app/Services/Global';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[UserService]
})
export class UpdateComponent implements OnInit {

  hide = true;
  token;
  register : any =[];
  url: string;


  constructor(
    private userservices: UserService, 
    private router:Router, 
    private route:ActivatedRoute
  ) {
    this.token = this.userservices.getToken();
    this.url = GLOBAL.url;
    this.register = new Register('','','','','','','',null);
   }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.route.params.forEach((params : Params) =>{
      var id = params['id'];

      this.userservices.getUser(this.token, id).subscribe(
        res =>{
          var user = res['user'];  
          this.register = user;
  
          if(!user){
            this.router.navigate(['/register']);
          }e =>{
            var errorMessage = <any>e;

            if(errorMessage != null){
              var body = JSON.parse(e.body);
              console.log(e)
            }
          }
        }
      )
    })
  }

  onSubmitUp(){
    console.log(this.register)
    this.route.params.forEach((params:Params) =>{
      var id = params['id'];

      this.userservices.updateUser(this.token, id, this.register).subscribe(
        res =>{
          var user = res['user'];
          this.register = user;

          if(!user.id){
            alert ('Error al Actualizar')
          }
          this.router.navigateByUrl('/register');

        },e =>{
          var errorMessage = <any>e;
            if(errorMessage != null){
            //this.errorMessage = e.error.message;
            console.log(e)
          }
        }
      )
    })
  }

}
