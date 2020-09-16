import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../Services/Global';
import { Agend } from '../../../models/agend'
import { AgendService } from '../../../Services/agend.service'

@Component({
  selector: 'app-agend-list',
  templateUrl: './agend-list.component.html',
  styleUrls: ['./agend-list.component.css'],
  providers: [UserService, AgendService]
})
export class AgendListComponent implements OnInit {

  agend: Agend
  token
  url
  p: number = 1
  confirm

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private agendService: AgendService
  ) { 
    this.token = this.userService.getToken()
    this.url = GLOBAL.url
  }

  ngOnInit(): void {
    this.getAgends()
  }

  getAgends(){
    this.route.params.forEach((params: Params) =>{
      let page = +params['page']

      this.agendService.getAgends(this.token, page).subscribe(
        (res:any) =>{
          this.agend = !res ? [] : res.agend

          if(!this.agend){
            this.router.navigateByUrl('/agend')
          }
        },e =>{
          let errorMessage = <any>e
          if(errorMessage != null){
            console.log(e)
          }
        }
      )
    })
  }
}
