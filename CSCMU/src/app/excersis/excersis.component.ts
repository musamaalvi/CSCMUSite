import { Component, OnInit } from '@angular/core';


declare var $: any;
@Component({
  selector: 'app-excersis',
  templateUrl: './excersis.component.html',
  styleUrls: ['./excersis.component.css']
})
export class ExcersisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  CodeRunButton(codeToRun){
    debugger;
    $('#TestingCode').text($(codeToRun).val())
  }
}
