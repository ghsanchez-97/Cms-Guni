import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../Services/Global';
//import { Event } from '../models/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  url: string;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  addEvent(token, event){
    var params = JSON.stringify(event);
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': token
    });
    return this.http.post(this.url+'newEvent', params, {headers:headers});

  }

  editEvent(token, id, event){
    var params = JSON.stringify(event);
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.put(this.url+'updateEvent/'+id, params, {headers:headers});
  }

  delEvent(token, id){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.delete(this.url+'deleteEvent/'+id, {headers:headers});
  }

  getEvents(token, page){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getEvents/'+page, {headers : headers});
  }

  getEventsPublic(page){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    
    return this.http.get(this.url+'getEventPublic/'+page, {headers : headers});
  }

  getEvent(token, id){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getEvent/'+id, {headers : headers});
  }

  getEventPublic(name){
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.get(this.url+'getEventPublic/'+name, {headers : headers});
  }
}
