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
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { 
    
    this.httpClient.get("https://localhost:44310/api/values/DrillDownDetail/100011").subscribe(data =>{
    
    this.mainData=data;
    //this.SetHTML();

    })
  }


  CheckPointClick(id){
    debugger;
    this.htmlString='<input type="radio" name="gender" value="male"> Male<br>\
    <input type="radio" name="gender" value="female"> Female<br>\
    <input type="radio" name="gender" value="other"> Other<br>  '
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

    });
  }

}
