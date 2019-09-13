import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


declare var $: any;
@Component({
  selector: 'app-topic-container',
  templateUrl: './topic-container.component.html',
  styleUrls: ['./topic-container.component.css']
})
export class TopicContainerComponent implements OnInit {
  @Input() MainData;

  constructor(private router: Router) {
    console.log(this.MainData)
  }


  ExerciseDrillDown(id){
    debugger;
    this.router.navigateByUrl('/sandbox/'+$(id).attr('id'))
  }
  headingClicked(event) {
    debugger;
    this.router.navigateByUrl('/details/'+event.currentTarget.id)
  }
  atagclick(atag) {

  }
  ngOnInit() {
  }

}
