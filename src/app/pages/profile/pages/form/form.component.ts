import { Component, OnInit } from '@angular/core';

import { StepperService } from './components/stepper/services';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {Store, select} from '@ngrx/store';
import  * as fromRoot from '@app/store';
import * as fromDictionaries from '@app/store/dictionaries';
import { PersonalForm } from './components/personal/personal.component';
import {ProfessionalForm} from './components/professional/professional.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],


})
export class FormComponent implements OnInit {

  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  private destroy = new Subject<any>();

  constructor( private store: Store<fromRoot.State>,
               public stepperSer: StepperService) { }

  ngOnInit(): void {

    this.dictionaries$ = this.store.pipe(select(fromDictionaries.getDictionaries));
    this.dictionariesIsReady$ = this.store.pipe(select(fromDictionaries.getIsReady));

    this.stepperSer.init22([
                         {key: 'professional', label: 'Professional'},
                         {key: 'personal', label: 'Personal'}
                      ]);

    this.stepperSer.complete$.pipe( takeUntil(this.destroy)).subscribe(() => {
      console.log('completed');
    });

    this.stepperSer.cancel$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('canceled');
    });
  }
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  onChangedPersonal22(data: PersonalForm): void {
    console.log('personal changed = ', data);
  }

  onChangedProfessional33(data: ProfessionalForm) {
      console.log(' professional changed  = ',  data);
  }
}























