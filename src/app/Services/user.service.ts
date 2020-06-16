import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './Global'
import { Register } from '../models/register';  

@Injectable({
  providedIn: 'root'
})
export class UserService {
  identity;
  token;
  url:string;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  signup(userlogin, gethash = null){
    
    if(gethash != null){
      userlogin.gethash = gethash;
    }

    var json = JSON.stringify(userlogin);
    var params = json;

    var headers = new HttpHeaders({'Content-Type' : 'application/json'}); 

    return this.http.post(this.url+'login', params, {headers:headers})
  }

  register(userRegister, token){
    var params = JSON.stringify(userRegister);
    var headers= new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': token});

    return this.http.post(this.url+'register', params, {headers:headers});
  }

  getUsers(token, page){
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    })
    return this.http.get(this.url+'getUsers/'+page, {headers:headers})
  }

  getUser(token, id){
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.http.get(this.url+'getUser/'+id, {headers:headers})
  }

  updateUser(userUpdate:Register, token, id){
    var params = JSON.stringify(userUpdate);
    var headers= new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': token});

    return this.http.put(this.url+'updateUser/'+id, params, {headers:headers});
  }

  getIdentity(){
    var identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != 'undefined'){
      this.identity = identity;
    }else{
      this.identity = null
    }
    return this.identity;
  }

  getToken(){
    var token = localStorage.getItem('token');

    if(token != 'undefined'){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
