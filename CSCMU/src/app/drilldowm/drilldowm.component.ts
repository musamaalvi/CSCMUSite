import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-drilldowm',
  templateUrl: './drilldowm.component.html',
  styleUrls: ['./drilldowm.component.css']
})
export class DrilldowmComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

    });
  }

}
