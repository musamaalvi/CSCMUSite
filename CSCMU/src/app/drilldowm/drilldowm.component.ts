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
  htmlString="";
  checkPointData
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { 
    
    this.httpClient.get("https://localhost:44310/api/values/DrillDownDetail/100011").subscribe(data =>{
    
    this.mainData=data;
    //this.SetHTML();

    })
  }


  CheckPointClick(id){
    debugger;
    this.httpClient.get("https://localhost:44310/api/values/CheckPoint/5000").subscribe(data =>{
    
    this.checkPointData = data;
    id.childNodes[0].textContent=this.checkPointData[0];
    id.childNodes[2].textContent=this.checkPointData[1];
    id.childNodes[5].textContent=this.checkPointData[2];
    id.childNodes[8].textContent=this.checkPointData[3];
    id.childNodes[11].textContent=this.checkPointData[4];
    id.hidden = false
    //this.SetHTML();

    })
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

    });
  }

}
