import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range.component';

import {ReactiveFormsModule} from '@angular/forms';
import {DateModule} from '@app/shared';




@NgModule({
  declarations: [DateRangeComponent],
  imports: [
    CommonModule,
    DateModule,
    ReactiveFormsModule
  ],
  exports: [
    DateRangeComponent
  ]
})
export class DateRangeModule { }
