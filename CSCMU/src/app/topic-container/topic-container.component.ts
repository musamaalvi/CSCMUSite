import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

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

  headingClicked(event) {
    this.router.navigateByUrl('/details')
  }
  atagclick(atag) {

  }
  ngOnInit() {
  }

}
