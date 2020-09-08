import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { User } from '../../../models/user';
import { UserService } from '../../../Services/user.service';
import { UploadService } from '../../../Services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from 'src/app/Services/Global';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [UserService, UploadService]
})
export class UpdateComponent implements OnInit {
  hide = true;
  token;
  user : User;
  url: string;
  filesToUpload: Array<File>;

  constructor(
    private userservices: UserService, 
    private router:Router, 
    private route:ActivatedRoute,
    private uploadService: UploadService
  ) {
    this.token = this.userservices.getToken();
    this.url = GLOBAL.url;
    this.user = new User('','','','','','','','','','');
   }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.route.params.forEach((params : Params) =>{
      var id = params['id'];

      this.userservices.getUser(this.token, id).subscribe(
        (res:any) =>{
          this.user = !res ? [] : res.user;
  
          if(!this.user){
            this.router.navigate(['/List-User']);
          }e =>{
            var errorMessage = <any>e;

            if(errorMessage != null){
              var body = JSON.parse(e.body);
              console.log(body)
            }
          }
        }
      )
    })
  }


  onSubmitUp(){
     console.log(this.user)
    this.route.params.forEach((params : Params) =>{
      const id = params['id'];

      this.userservices.updateUser(this.token, id, this.user).subscribe(
        (res:any) =>{
          const update = res;
  
          if(!update){
            this.router.navigate(['/List-User']);
          }else{
            this.uploadService.makeFileRequest(this.url+'upload-image/'+id, [], this.filesToUpload, this.token, 'image')
                .then(
                  (result) => {
                    this.router.navigate(['/list-new']);
                  },e => {
                    console.log(e);
                  }
                )
              this.router.navigate(['/list-new']);
          }
        },e =>{
          var errorMessage = <any>e;

          if(errorMessage != null){
            var body = JSON.parse(e.body);
            console.log(body)
          }
        }
      )
    })
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
