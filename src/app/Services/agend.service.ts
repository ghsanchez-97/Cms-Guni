import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../Services/Global';

@Injectable({
  providedIn: 'root'
})
export class AgendService {
  url;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }
  addAgend(token, agend){
    var params = JSON.stringify(agend);
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': token
    });
    return this.http.post(this.url+'newAgend', params, {headers:headers});

  }

  editAgend(token, id, nw){
    var params = JSON.stringify(nw);
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.put(this.url+'updateAgend/'+id, params, {headers:headers});
  }

  delAgend(token, id){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.delete(this.url+'deleteAgend/'+id, {headers:headers});
  }

  getAgends(token, page){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getAgends/'+page, {headers : headers});
  }

  getAgendsPublic(page){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    
    return this.http.get(this.url+'getsAgendsPublic/'+page, {headers : headers});
  }

  getAgend(token, id){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getAgend/'+id, {headers : headers});
  }

  getAgendPublic(name){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.get(this.url+'getsAgendPublic/'+name, {headers : headers});
  }
}