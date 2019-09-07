import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

declare var $: any;
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
  htmlString = "";
  checkPointData
  DrillDownDetailPage
  showMainPage = false;
  apiURL="http://127.0.0.1:1000/"
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.paramMap.subscribe(params => {
      this.DrillDownDetailPage = +params.get('id')
    });
    this.httpClient.get("https://localhost:44310/api/values/DrillDownDetail/" + this.DrillDownDetailPage).subscribe(data => {

      this.mainData = data;
      //this.SetHTML();
      this.showMainPage=true;
    })
  }

  iFrameClicked(iFrameHandle, iFrameHandle1){
    debugger
    $(iFrameHandle).removeClass("IframeHidden")
    $(iFrameHandle1).removeClass("IframeHidden")
  }
  CodeRunButton(codeToRun){
    debugger;
    $('#TestingCode').text($(codeToRun).val())
  }
  alertBoxClicked(AlertBox){
    debugger;
    $(AlertBox).removeAttr('hidden')

  }
  CheckPointClick(id, idCheckPoint) {
    debugger;
    this.httpClient.get("https://localhost:44310/api/values/CheckPoint/" + idCheckPoint).subscribe(data => {

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
