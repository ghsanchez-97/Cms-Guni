import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/event';
import { UserService } from '../../../Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../Services/Global';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
  providers: [UserService, EventService]
})
export class ListEventComponent implements OnInit {

  event: Event;
  token;
  url: string;
  p: number = 1;
  confirm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private eventService: EventService
  ) {
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(){
    this.route.params.forEach((params:Params) =>{
      var page = +params['page'];

      this.eventService.getEvents(this.token, page).subscribe(
        (res:any) =>{
          this.event = !res ? [] : res.event;

          if(!this.event){
            this.router.navigateByUrl('/event');
          }
        },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            console.log(e);
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
    this.eventService.delEvent(this.token, id).subscribe(
      (res : any) =>{
        this.getEvents();
      },e => {
        var errorMessage = <any>e;
        console.log(errorMessage);
      }
    )
  }
}
