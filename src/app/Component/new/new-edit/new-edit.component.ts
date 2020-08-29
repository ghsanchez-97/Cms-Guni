import { Component, OnInit } from '@angular/core';
import { New } from '../../../models/new';
import { UserService } from '../../../Services/user.service';
import { UploadService } from '../../../Services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../Services/Global';
import { NewService } from '../../../Services/new.service';

import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css'],
  providers: [UserService, NewService, UploadService, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class NewEditComponent implements OnInit {

  nw: New;
  token;
  url;
  filesToUpload: Array<File>;
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
    private route: ActivatedRoute,
    private userService: UserService,
    private newService: NewService,
    private uploadService: UploadService
  ) { 
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
    this.nw = new New('','','','',null,null);
  }

  ngOnInit(){
    this.getNew();
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

  getNew(){
    this.route.params.forEach((params:Params) => {
      var id = params ['id'];

      this.newService.getNew(this.token, id).subscribe(
        (res:any) =>{
          this.nw = !res ? [] : res.nw;
          console.log(this.nw);

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

  onSubmitNw(){
    console.log(this.nw);

    this.route.params.forEach((params: Params) => {
      var id = params['id'];

      this.newService.editNew(this.token, id, this.nw).subscribe(
        (res:any) => {
          var update = res;

          if(!update){
            this.router.navigate(['/list-new']);
          }else{
            this.uploadService.makeFileRequest(this.url+'uploadImageNew/'+id, [], this.filesToUpload, this.token, 'image')
                .then(
                  (result) => {
                    this.router.navigate(['/list-new']);
                  },e => {
                    console.log(e);
                  }
                )
              this.router.navigate(['/list-new']);
          }
        },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            var body = JSON.parse(e.body);
            console.log(body);
          }
        }
      );
    });
  }
  
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
