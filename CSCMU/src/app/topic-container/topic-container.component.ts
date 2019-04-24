import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-container',
  templateUrl: './topic-container.component.html',
  styleUrls: ['./topic-container.component.css']
})
export class TopicContainerComponent implements OnInit {
  @Input() MainData;
 
  constructor() { 
    
  }

  ngOnInit() {
  }

}
