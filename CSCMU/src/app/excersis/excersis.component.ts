import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {apiURL} from "../../environments/environment";
declare function callBrython(): any;
declare var $: any;
@Component({
  selector: 'app-excersis',
  templateUrl: './excersis.component.html',
  styleUrls: ['./excersis.component.css']
})
export class ExcersisComponent implements OnInit {
QuestionId


  constructor(private route: ActivatedRoute,  private httpClient: HttpClient) {
    // callBrython();
    debugger;
    this.route.paramMap.subscribe(params => {
      this.QuestionId = +params.get('id')
    });
    
   }

  ngOnInit() {
    debugger;
    if(this.QuestionId.toString()!="0"){
      this.httpClient.get(apiURL + "/api/values/ExerciseDetails/" + this.QuestionId).subscribe(data => {
      debugger;
      $('textarea').text(data)
      
      
    })
    }
  }
  CodeRunButton(codeToRun){
    debugger;
    $('#TestingCode').text($(codeToRun).val())
    $('#OutputDiv').text('turtle-print-output')
    $('#DrawingOutputDiv').text('exerciseOutputDrawing')
    $('#pythonFunctionCaller').trigger('click')
  }
}
