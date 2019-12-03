import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {apiURL} from "../../environments/environment";


declare function callBrython(): any;
declare var $: any;
@Component({
  selector: 'app-drilldowm',
  templateUrl: './drilldowm.component.html',
  styleUrls: ['./drilldowm.component.css']
})
export class DrilldowmComponent implements OnInit {
  id: number;
  mainData;
  mainHeading="";
  objectKeys = Object.keys;
  theHtmlString
  htmlString = "";
  checkPointData
  DrillDownDetailPage
  showMainPage = false;
  urlOfPage="";
  apiURL="http://127.0.0.1:1000/"

  ngAfterViewInit(){
    debugger;
    
    setTimeout( ()=>{
      callBrython();
      }, 1000)
    }
  

  backToLessons(){
    this.router.navigateByUrl('/')
  }
  constructor(private route: ActivatedRoute, private httpClient: HttpClient,  private router: Router) {
    
    this.route.paramMap.subscribe(params => {
      this.DrillDownDetailPage = +params.get('id')
      this.mainHeading = params.get('name')
    });
    this.httpClient.get(apiURL + "/api/values/DrillDownDetail/" + this.DrillDownDetailPage).subscribe(data => {

      this.mainData = data;
      //this.SetHTML();
      this.showMainPage=true;
    })

    this.urlOfPage = window.location.href;
  }

  iFrameClicked(iFrameHandle, iFrameHandle1, codeTorRun){
    debugger
    this.httpClient.get(apiURL + "/api/values/InlineContainer/" + iFrameHandle.id).subscribe(data => {

      $(codeTorRun).text(data)  
      })
    $(iFrameHandle).removeClass("IframeHidden")
    $(iFrameHandle1).removeClass("IframeHidden")

  }
  CodeRunButton(codeToRun, outputSet){
    debugger;
    $('#panel').empty()
    $('#TestingCode').text($(codeToRun).val())
    $('#OutputDiv').text($(outputSet).attr('id'))
    $('#pythonFunctionCaller').trigger('click')
  }
  alertBoxClicked(AlertBox){
    debugger;
    $(AlertBox).removeAttr('hidden')

  }
  CheckPointClick(id, idCheckPoint) {
    debugger;

    if(idCheckPoint.getAttribute('info')=="mcq"){
      this.httpClient.get( apiURL + "/api/values/CheckPoint/" + $(idCheckPoint).attr('id')).subscribe(data => {

        this.checkPointData = data;
        id.childNodes[0].textContent = this.checkPointData[0];
        id.childNodes[2].textContent = this.checkPointData[1];
        id.childNodes[5].textContent = this.checkPointData[2];
        id.childNodes[8].textContent = this.checkPointData[3];
        id.childNodes[11].textContent = this.checkPointData[4];
        id.hidden = false
        //this.SetHTML();
  
      })
    }
    else{
      this.router.navigateByUrl('/sandbox/'+$(idCheckPoint).attr('id'));
    }
    
  }
  SubmitButtonClicked(options) {
    debugger;
    for (var i = 0; i < $(options).find('input').length; i++) {
      if ($(options).find('input')[i].checked == true) {
        if (i != this.checkPointData[5])
          $(options).closest('div').find('div').removeClass('checkPointHiddenWrong')
        else
          $(options).closest('div').find('div').removeClass('checkPointHiddenCorrect')
      }
    }

  }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

    });

    
  }

}
