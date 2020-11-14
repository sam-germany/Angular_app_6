import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WlecomeRoutingModule } from './wlecome-routing.module';
import { WlecomeComponent } from './wlecome.component';


@NgModule({
  declarations: [WlecomeComponent],
  imports: [
    CommonModule,
    WlecomeRoutingModule
  ]
})
export class WlecomeModule { }
