import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DrilldowmComponent } from './drilldowm/drilldowm.component';

const routes: Routes = [{path:'', component:MainPageComponent},
{path:'details', component:DrilldowmComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
