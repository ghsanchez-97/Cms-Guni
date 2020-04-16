import { Component, OnInit } from '@angular/core';

import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css'],
  providers: [UserService]
})
export class CmsComponent implements OnInit {

  token;

  constructor(private router: Router) { }

  ngOnInit() {
    var hp = new JwtHelperService();
    const key = hp.decodeToken(localStorage.getItem('token'));
    console.log(key);
    this.token = key.name;
    this.show();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.token = null;
    this.router.navigateByUrl('');
  }

  show(){
    var btn = document.querySelector('.show');
        
    btn.addEventListener('click', function(){
      document.getElementById('sidebar').classList.toggle('active');
    });
  }

}
