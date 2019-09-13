import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DrilldowmComponent } from './drilldowm/drilldowm.component';
import { ExcersisComponent } from './excersis/excersis.component';

const routes: Routes = [{path:'', component:MainPageComponent},
{path:'details/:id', component:DrilldowmComponent},
{path:'sandbox/:id', component:ExcersisComponent},
{path:'sandbox', component:ExcersisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
