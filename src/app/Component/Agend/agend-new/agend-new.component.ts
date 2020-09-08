import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

import { GLOBAL } from '../../../Services/Global';
import { UserService } from '../../../Services/user.service';
import { AgendService } from '../../../Services/agend.service';
import { Agend } from '../../../models/agend';

@Component({
  selector: 'app-agend-new',
  templateUrl: './agend-new.component.html',
  styleUrls: ['./agend-new.component.css'],
  providers:[UserService, AgendService,ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class AgendNewComponent implements OnInit {

  agend: Agend;
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
    private router: Router,
    private userService: UserService,
    private agendService: AgendService
  ) {
    this.token = this.userService.getToken()
    this.url = GLOBAL.url
    this.agend = new Agend('','','',new Date())
   }

  ngOnInit(): void {
  }

  onActionComplete(args){
    if(args.requestType == "Image"){
      var imgElement = args.elements[0];
      this.toBase64(imgElement.src,function(dataUrl){
        imgElement.setAttribute('src',dataUrl)
      });
    }
  }
  

  toBase64(url, callback){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function(){
      var filereader = new FileReader();
      filereader.onloadend = function(){
        callback(filereader.result);
      }
      filereader.readAsDataURL(httpRequest.response);
    }

    httpRequest.open('GET', url);
    httpRequest.responseType = 'blob';
    httpRequest.send();
  }

  onSubmitAgend(){
    console.log(this.agend)

    this.agendService.addAgend(this.token, this.agend).subscribe(
      (res:any)=>{
        let agend = !res ? [] : res.agend

        this.router.navigate(['/agend']);
      },e =>{
        const errorMessage = <any>e
        if(errorMessage != null){
          let body = JSON.parse(e.body)
          console.log(e)
        }
      }
    )
  }

}
