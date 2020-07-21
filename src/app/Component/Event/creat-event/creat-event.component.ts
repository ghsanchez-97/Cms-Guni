import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

import { GLOBAL } from '../../../Services/Global';
import { UserService } from '../../../Services/user.service';
import { UploadService } from '../../../Services/upload.service';
import { EventService } from '../../../Services/event.service';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-creat-event',
  templateUrl: './creat-event.component.html',
  styleUrls: ['./creat-event.component.css'],
  providers: [UserService, UploadService, EventService ]
})
export class CreatEventComponent implements OnInit {

  event: Event;
  token;
  url:string;
  filesToUpload: Array<File>;

  constructor(
    private router: Router,
    private userService: UserService,
    private eventService: EventService

  ) { 
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
    this.event = new Event('','','');
  }

  ngOnInit() {
    
  }

  onSubmitEv(){
    console.log(this.event);

    this.eventService.addEvent(this.token, this.event).subscribe(
      res =>{
        var nw = res['nw'];
        this.event = nw;

        this.router.navigate(['/event']);
      },e => {
        var errorMessage = <any>e;
        if(errorMessage != null){
          var body = JSON.parse(e.body);
          console.log(e);
        }
      }
    )
  }

}
