import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

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
    callBrython();
    debugger;
    this.route.paramMap.subscribe(params => {
      this.QuestionId = +params.get('id')
    });
    
   }

  ngOnInit() {
    debugger;
    if(this.QuestionId.toString()!="0"){
      this.httpClient.get("https://localhost:44310/api/values/ExerciseDetails/" + this.QuestionId).subscribe(data => {
      debugger;
      $('textarea').text(data)
      
      
    })
    }
  }
  CodeRunButton(codeToRun){
    debugger;
    $('#TestingCode').text($(codeToRun).val())
    $('#OutputDiv').text('turtle-print-output')
    $('#pythonFunctionCaller').trigger('click')
  }
}
