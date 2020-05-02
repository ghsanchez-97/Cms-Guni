import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { Register } from '../../../models/register';
import { UserService } from '../../../Services/user.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../Services/Global'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UserService]
})
export class ListUsersComponent implements OnInit {
  
  user: Register;
  token;
  url:string;
  p: number = 1; 
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { 
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.route.params.forEach((params: Params) =>{
      var page = +params['page']

      this.userService.getUsers(this.token, page).subscribe(
        res =>{
          var user = res['user'];
          this.user = user;
  
          if(!user){
            this.router.navigateByUrl('/register');
          }
        },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            console.log(e)
          }
        }
      )
    })  

  }

}
