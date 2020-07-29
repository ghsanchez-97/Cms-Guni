import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

import { GLOBAL } from '../../../Services/Global';
import { UserService } from '../../../Services/user.service';
import { UploadService } from '../../../Services/upload.service';
import { NewService } from '../../../Services/new.service';
import { New } from '../../../models/new';

@Component({
  selector: 'app-new-nw',
  templateUrl: './new-nw.component.html',
  styleUrls: ['./new-nw.component.css'],
  providers: [UserService,NewService,ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class NewNwComponent implements OnInit {

  nw : New;
  token;
  url;
  insertImageSettings: any;
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
    private newService: NewService
  ) { 
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
    this.nw = new New('','','','',null,null);
  }

  ngOnInit() {
  }

  onSubmitNw(){
    console.log(this.nw);

    this.newService.addNew(this.token, this.nw).subscribe(
      (res:any) =>{
        var wn = res;

        this.router.navigate(['/New']);
      },e =>{
        var errorMessage = <any>e;
        if(errorMessage != null){
          var body = JSON.parse(e.body);
          console.log(e);
        }
      }
    )
  }
}
