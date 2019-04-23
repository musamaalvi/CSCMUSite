import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSCMU';
  topicContainerData;


  constructor(private httpClient: HttpClient) {
    this.httpClient.get("https://localhost:44310/api/values").subscribe(data =>{
      this.topicContainerData = data;
      debugger;
    })

  }
}
