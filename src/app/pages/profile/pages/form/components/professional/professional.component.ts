import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {StepperService} from '../stepper/services';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Dictionaries} from '@app/store/dictionaries';
import {markFormGroupTouched22} from '@app/shared/utils/form';
import {regexErrors} from '@app/shared/utils';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {RecruiterForm} from './roles/recruiter/recruiter.component';
import {EmployeeForm} from './roles/employee/employee.component';


export interface  ProfessionalForm {
    about: string;
    roleId: string;
    role: RecruiterForm | EmployeeForm;
}

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit, OnDestroy {

  @Input() value22: ProfessionalForm;
  @Input() dictionaries: Dictionaries;

  @Output() changed33 = new EventEmitter<ProfessionalForm>();
  form22: FormGroup;
  regexErrors22 = regexErrors;

  private destroy = new Subject<any>();

  constructor( private fb: FormBuilder,
               private cdr: ChangeDetectorRef,
               private stepperSer: StepperService) { }

  ngOnInit(): void {
    this.form22 = this.fb.group({
                            roleId: [null, {
                                      updateOn: 'change',
                                      validators: [
                                          Validators.required
                                      ]
                                  }],
                            about: [null]
    });

    if (this.value22) {
      this.form22.patchValue(this.value22);
    }

    this.stepperSer
        .check$.pipe(takeUntil(this.destroy)).subscribe((type) => {

      if (!this.form22.valid) {
        markFormGroupTouched22(this.form22);
        this.form22.updateValueAndValidity();
        this.cdr.detectChanges();
      }else {
        this.changed33.emit(this.form22.value);
      }

      this.stepperSer[type].next(this.form22.valid);
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
