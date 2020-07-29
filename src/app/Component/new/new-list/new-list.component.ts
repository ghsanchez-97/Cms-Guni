import { Component, OnInit } from '@angular/core';
import { New } from '../../../models/new';
import { UserService } from '../../../Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../Services/Global';
import { NewService } from '../../../Services/new.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
  providers: [UserService, NewService]
})
export class NewListComponent implements OnInit {

  nw: New;
  token;
  url;
  p: number = 1;
  confirm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private newService: NewService
  ) { 
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    this.getNews();
  }
  getNews(){
    this.route.params.forEach((params:Params) =>{
      var page = +params['page'];

      this.newService.getNews(this.token, page).subscribe(
        (res:any) =>{
          this.nw = !res ? [] : res.nw;

          if(!this.nw){
            this.router.navigateByUrl('/New');
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

}
