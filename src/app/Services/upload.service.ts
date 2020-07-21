import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './Global';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  token;
  url:String;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
   }

   makeFileRequest(url, params: Array<string>, files: Array<File>, token, name){

    return new Promise(function(resolve, reject){
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for(var i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 20){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    });
  }
}
