import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {StepperService} from '../stepper/services';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Dictionaries} from '@app/store/dictionaries';
import { markFormGroupTouched22} from '@app/shared/utils/form';
import { regex, regexErrors } from '@app/shared/utils';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';



export interface PersonalForm {
  name: string;
  photoURL: string;
  country: string;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalComponent implements OnInit {

  @Input() value22: PersonalForm;
  @Input() dictionaries22: Dictionaries;
  @Output() changed22  = new EventEmitter<PersonalForm>();

  form33: FormGroup;
  regexErrors = regexErrors;

  private destroy = new Subject<any>();

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private stepperSer: StepperService) { }


  ngOnInit(): void {

    this.form33 = this.fb.group({
                               photoURL: [null],
                               name: [null, {
                                          updateOn: 'blur',
                                          validators: [
                                            Validators.required,
                                            Validators.maxLength(128),
                                            Validators.pattern(regex.latinAndSpaces)
                                              ]
                               }],
                               country: [null, {
                                          updateOn: 'change',
                                          validators: [
                                            Validators.required
                                          ]
                               }]

    });
          if (this.value22) {
             this.form33.patchValue(this.value22);
           }

    this.stepperSer
         .check$.pipe(takeUntil(this.destroy))
                .subscribe((type) =>  {

         if ( !this.form33.valid) {
            markFormGroupTouched22(this.form33);
            this.form33.updateValueAndValidity();
            this.cdr.detectChanges();
         } else {
            this.changed22.emit(this.form33.value);
         }

         this.stepperSer[type].next(this.form33.valid);
      })
  }



  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  onPhotoChanged22(url: string): void {
    if (url) {
       this.form33.controls.photoURL.setValue(url);
    }
  }

}
/*
 updateValueAndValidity() forces the form to perform validation.
  This is useful when you add/remove validators dynamically
   using setValidators, RemoveValidators etc
 */
