import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayComponent} from '@app/pages/profile/pages/display/display.component';


const routes: Routes = [
  {
    path: '',
    component: DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
