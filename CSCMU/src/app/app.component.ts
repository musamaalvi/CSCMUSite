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
  numbers = []
  showData=false;
  
  constructor(private httpClient: HttpClient) {
    this.httpClient.get("https://localhost:44310/api/values").subscribe(data =>{
      this.topicContainerData = data;
      for(var i=0;i<Object.keys(this.topicContainerData).length;i++){
        this.numbers.push(i);
      }
      debugger;
      this.showData=true

    })

  }
}
