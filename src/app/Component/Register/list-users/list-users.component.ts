import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { User } from '../../../models/user';
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
  
  user : User;
  token;
  url:string;
  p: number = 1;
  confirm;
  
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

  onDeleteConfirm(id){
    this.confirm = id;
  }
  onCancelEvent(){
    this.confirm = null;
  }

  onDeleteEvent(id){
    this.userService.deleteUser(this.token, id).subscribe(
      (response:any)=>{
        this.getUsers();
      },e =>{
        var errorMessage = <any>e;
      }
    )
  }

}
