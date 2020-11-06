import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import {ButtonsModule} from '@app/shared/buttons/buttons.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '@app/shared';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    ReactiveFormsModule,
    ControlsModule
  ]
})
export class SharedModule { }
