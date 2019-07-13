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
    
    this.mainData=data;
    //this.SetHTML();

    })
  }


  CheckPointClick(id){
    debugger;
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

    });
  }

}
