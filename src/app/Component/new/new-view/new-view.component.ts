import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../Services/Global';
import { UserService } from '../../../Services/user.service';
import { NewService } from '../../../Services/new.service';
import { New } from '../../../models/new';

import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-new-view',
  templateUrl: './new-view.component.html',
  styleUrls: ['./new-view.component.css'],
  providers: [UserService, NewService, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class NewViewComponent implements OnInit {

  nw : New;
  nws : New[];
  token;
  url;
  tools: Object ={
    items:[
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen'
    ]
  };


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
    this.getNew();
    this.getNews();
  }

  getNew(){
    
    this.route.params.forEach((params:Params) => {
      var id = params ['id'];

      this.newService.getNew(this.token, id).subscribe(
        (res:any) =>{
          this.nw = !res ? [] : res.nw;
          console.log(this.nw)

          if(!this.nw){
            this.router.navigate(['/list-new']);
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

  getNews(){
    this.route.params.forEach((params:Params) =>{
      var page = +params['page'];

      this.newService.getNews(this.token, page).subscribe(
        (res:any) =>{
          this.nws = !res ? [] : res.nw;

          if(!this.nws){
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
