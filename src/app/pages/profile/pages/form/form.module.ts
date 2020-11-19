import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {StepperModule} from './components';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';



import { FormFieldModule, InputModule, AutocompleteModule } from '@app/shared/controls';
import { FilesUploadModule } from '@app/shared/popups';
import { SpinnerModule } from '@app/shared/indicators';
import {ReactiveFormsModule} from '@angular/forms';
import {UserPhotoModule} from '@app/shared/layout';

@NgModule({
  declarations: [FormComponent, PersonalComponent, ProfessionalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    FormFieldModule,
    InputModule,
    FilesUploadModule,
    SpinnerModule,
    AutocompleteModule,
    StepperModule,
    UserPhotoModule
  ]
})
export class FormModule { }
