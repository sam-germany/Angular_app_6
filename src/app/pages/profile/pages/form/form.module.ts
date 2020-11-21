import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {StepperModule} from './components';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';



import {
  FormFieldModule,
  InputModule,
  AutocompleteModule,
  RadiosModule,
  SelectModule,
  DateRangeModule,
  CheckboxesModule
} from '@app/shared/controls';
import { FilesUploadModule } from '@app/shared/popups';
import { SpinnerModule } from '@app/shared/indicators';
import {ReactiveFormsModule} from '@angular/forms';
import {UserPhotoModule} from '@app/shared/layout';
import { EmployeeComponent } from './components/professional/roles/employee/employee.component';
import { RecruiterComponent } from './components/professional/roles/recruiter/recruiter.component';
import { ExperiencesComponent } from './components/professional/roles/employee/experiences/experiences.component';
import {ButtonModule} from '@app/shared/buttons';

@NgModule({
  declarations: [FormComponent, PersonalComponent, ProfessionalComponent, EmployeeComponent, RecruiterComponent, ExperiencesComponent],
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
        UserPhotoModule,
        RadiosModule,
        SelectModule,
        DateRangeModule,
        CheckboxesModule,
        ButtonModule
    ]
})
export class FormModule { }
