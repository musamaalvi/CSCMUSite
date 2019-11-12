import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {apiURL} from "../../environments/environment";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  title = 'CSCMU';
  topicContainerData;
  numbers = []
  innerNumbers = []
  showData=false;
  objectKeys;
  
  constructor(private httpClient: HttpClient) {
    this.objectKeys = Object.keys;
    this.httpClient.get(apiURL + "/api/values/GetInitial").subscribe(data =>{
      this.topicContainerData = data;
      for(var i=0;i<Object.keys(this.topicContainerData).length;i++){
        // for(var j=0;j<Object.keys(this.topicContainerData[i]).length;j++){
        //   this.innerNumbers.push(j);
        // }
        this.numbers.push(i);
      }
      
      debugger;
      this.showData=true

    })

  }

}
