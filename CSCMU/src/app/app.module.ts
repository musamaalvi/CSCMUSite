import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopicContainerComponent } from './topic-container/topic-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { DrilldowmComponent } from './drilldowm/drilldowm.component';
import { ExcersisComponent } from './excersis/excersis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopicContainerComponent,
    MainPageComponent,
    DrilldowmComponent,
    ExcersisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
