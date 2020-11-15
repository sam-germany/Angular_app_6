import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

import {ReactiveFormsModule} from '@angular/forms';
import {ButtonsModule, ControlsModule, IndicatorsModule, PopupsModule} from '@app/shared';
import {FilesUploadModule} from '@app/shared/popups/files-upload/files-upload.module';


@NgModule({
  declarations: [SharedComponent],
    imports: [
        CommonModule,
        SharedRoutingModule,
        ButtonsModule,
        ReactiveFormsModule,
        ControlsModule,
        IndicatorsModule,
        FilesUploadModule,
        PopupsModule

    ]
})
export class SharedModule { }
