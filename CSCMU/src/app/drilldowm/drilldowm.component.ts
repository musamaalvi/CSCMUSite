import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-drilldowm',
  templateUrl: './drilldowm.component.html',
  styleUrls: ['./drilldowm.component.css']
})
export class DrilldowmComponent implements OnInit {
  id: number;
  mainData;
  objectKeys = Object.keys;
  theHtmlString
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { 
    
    this.httpClient.get("https://localhost:44310/api/values/DrillDownDetail/100011").subscribe(data =>{
     debugger;
    this.mainData=data;
    //this.SetHTML();

    })
  }


  SetHTML(){
    var htmlToAssign="";
    for(var i=0;i<Object.keys(this.mainData).length;i++){
      for(var k=0;k<this.mainData[i].length;k++){
        if(this.mainData[i][k].split('|')[1]=="MainHeading")
          htmlToAssign+="<h2>" + this.mainData[i][k].split('|')[0].split('#')[1] + "</h2>"
        else if(this.mainData[i][k].split('|')[1]=="Paragraph"){
          htmlToAssign+= "<div class='dynamic-html notes-content teacher'>\
          <p>" + this.mainData[i][k].split('|')[0].split('#')[1] + "</p>\
          </div>"
        }
        else if(this.mainData[i][k].split('|')[1]=="InlineContainer"){
            htmlToAssign+= '<div class="inline-af-container">\
            <div class="inline-editor-container">\
                <div id="inline-editor-68eb97269a19374dd4ffc0a6538caf06b497ecce" class=" ace_editor ace-xcode" style="width: 100%; height: 28.8px; font-size: 14px; font-family: Inconsolata;">\
                    <textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 14.4px; width: 7px; left: 44px; top: 14.4px;"></textarea>\
                    <div class="ace_gutter" aria-hidden="true">\
                        <div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 57.6px; width: 40px;">\
                            <div class="ace_gutter-cell " style="height: 14.4px;">1</div>\
                            <div class="ace_gutter-cell " style="height: 14.4px;">2</div>\
                        </div>\
                        <div class="ace_gutter-active-line" style="top: 14.4px; height: 14.4px;"></div>\
                    </div>\
                    <div class="ace_scroller" style="left: 40px; right: 0px; bottom: 0px;">\
                        <div class="ace_content" style="margin-top: 0px; width: 552px; height: 57.6px; margin-left: 0px;">\
                            <div class="ace_layer ace_print-margin-layer">\
                                <div class="ace_print-margin" style="left: 564px; visibility: visible;"></div>\
                            </div>\
                            <div class="ace_layer ace_marker-layer">\
                                <div class="ace_active-line" style="height:14.40000057220459px;top:14.40000057220459px;left:0;right:0;"></div>\
                            </div>\
                            <div class="ace_layer ace_text-layer" style="padding: 0px 4px;">\
                                <div class="ace_line" style="height:14.40000057220459px"><span class="ace_identifier">Rect</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">10</span>, <span class="ace_constant ace_numeric">20</span>, <span class="ace_constant ace_numeric">30</span>, <span class="ace_constant ace_numeric">40</span><span class="ace_paren ace_rparen">)</span></div>\
                                <div class="ace_line" style="height:14.40000057220459px"></div>\
                            </div>\
                            <div class="ace_layer ace_marker-layer"></div>\
                            <div class="ace_layer ace_cursor-layer ace_hidden-cursors">\
                                <div class="ace_cursor" style="left: 4px; top: 14.4px; width: 7px; height: 14.4px;"></div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="ace_scrollbar ace_scrollbar-v" style="display: none; width: 22px; bottom: 0px;">\
                        <div class="ace_scrollbar-inner" style="width: 22px; height: 28.8px;"></div>\
                    </div>\
                    <div class="ace_scrollbar ace_scrollbar-h" style="height: 22px; left: 40px; right: 0px; display: none;">\
                        <div class="ace_scrollbar-inner" style="height: 22px; width: 552px;"></div>\
                    </div>\
                    <div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;">\
                        <div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;"></div>\
                        <div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>\
                    </div>\
                </div>\
            </div>\
            <div class="inline-editor-button-group">\
                <button class="toolbar-button inline-af-play"></button>\
            </div>\
            <div></div>\
        </div>'
          }
        }
        
    
    }
    this.theHtmlString = htmlToAssign
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

    });
  }

}
