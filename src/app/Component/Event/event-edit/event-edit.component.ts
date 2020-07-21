import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

import { GLOBAL } from '../../../Services/Global';
import { UserService } from '../../../Services/user.service';
import { UploadService } from '../../../Services/upload.service';
import { EventService } from '../../../Services/event.service';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css'], 
  providers: [ UserService, EventService, UploadService]
})
export class EventEditComponent implements OnInit {

  event: Event;
  token;
  url:string;
  filesToUpload: Array<File>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private eventService: EventService,
    private uploadService: UploadService
  ) { 
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
    this.event = new Event('','','');
  }

  ngOnInit() {
    this.getEvent()
  }

  getEvent(){
    this.route.params.forEach((params: Params) =>{
      var id = params['id'];
      
      this.eventService.getEvent(this.token, id).subscribe(
        (res:any) =>{
          this.event = !res ? [] : res.event;

          if(!this.event){
            this.router.navigate(['/event'])
          }
        },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            console.log(e);
          }
        }
      )
    });
  }

  onSubmitEv(){
    console.log(this.event);
    this.route.params.forEach((params: Params) =>{
      var id = params['id'];
      
      this.eventService.editEvent(this.token, id,this.event).subscribe(
        (res:any) =>{
          var update = res;
          //this.event = update;

          if(!update){
            this.router.navigate(['/list-event']);
          }else{
            alert('Se ha actualizado el Evento');
            this.uploadService.makeFileRequest(this.url+'uploadImageEvent/'+id, [], this.filesToUpload, this.token, 'image')
                .then(
                  (result) =>{
                    this.router.navigate(['/list-event']);
                  },e =>{
                    console.log(e);
                  }
                )
                this.router.navigate(['/list-event']);
          }
        },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            var body = JSON.parse(e.body);
            console.log(body);
          }
        }
      )
    });
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
