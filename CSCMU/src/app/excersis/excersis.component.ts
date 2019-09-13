import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare function callBrython(): any;
declare var $: any;
@Component({
  selector: 'app-excersis',
  templateUrl: './excersis.component.html',
  styleUrls: ['./excersis.component.css']
})
export class ExcersisComponent implements OnInit {
QuestionId


  constructor(private route: ActivatedRoute) {
    callBrython();
    debugger;
    this.route.paramMap.subscribe(params => {
      this.QuestionId = +params.get('id')
    });
   }

  ngOnInit() {
  }
  CodeRunButton(codeToRun){
    debugger;
    $('#TestingCode').text($(codeToRun).val())
  }
}
