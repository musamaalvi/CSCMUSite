import { Component, OnInit } from '@angular/core';

declare function callBrython(): any;
declare var $: any;
@Component({
  selector: 'app-excersis',
  templateUrl: './excersis.component.html',
  styleUrls: ['./excersis.component.css']
})
export class ExcersisComponent implements OnInit {

  constructor() {
    callBrython();
   }

  ngOnInit() {
  }
  CodeRunButton(codeToRun){
    debugger;
    $('#TestingCode').text($(codeToRun).val())
  }
}
