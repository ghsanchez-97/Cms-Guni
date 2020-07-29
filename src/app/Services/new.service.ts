import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../Services/Global';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  url;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }
  addNew(token, nw){
    var params = JSON.stringify(nw);
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': token
    });
    return this.http.post(this.url+'NewNew', params, {headers:headers});

  }

  editNew(token, id, nw){
    var params = JSON.stringify(nw);
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.put(this.url+'updateNew/'+id, params, {headers:headers});
  }

  delNew(token, id){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.delete(this.url+'deleteNew/'+id, {headers:headers});
  }

  getNews(token, page){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getNews/'+page, {headers : headers});
  }

  getNewsPublic(page){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    
    return this.http.get(this.url+'getNewsPublic/'+page, {headers : headers});
  }

  getNew(token, id){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getNew/'+id, {headers : headers});
  }

  getNewPublic(name){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.get(this.url+'getNewPublic/'+name, {headers : headers});
  }
}
