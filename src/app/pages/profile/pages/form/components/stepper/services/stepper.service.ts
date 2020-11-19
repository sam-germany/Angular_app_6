import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

export interface Step {
  key: string;
  label: string;
}
export interface ActiveStep extends Step {
  index: number;
}
@Injectable()
export class StepperService {
  steps22: Step[];
  activeStep22: ActiveStep;

  next = new Subject<boolean>();
  next$: Observable<boolean>;

  prev = new Subject<void>();
  prev$ = this.prev.asObservable();

  complete = new Subject<boolean>();
  complete$: Observable<boolean>;

  cancel = new Subject<void>();
  cancel$ = this.cancel.asObservable();

  check = new Subject<'next' | 'complete'>();
  check$ = this.check.asObservable();

  constructor() {

    this.next$ = this.next.asObservable().pipe(
      filter(isOk => isOk)         //  see at bottom the explanation of this line
     );
    this.complete$ = this.complete.asObservable().pipe(
      filter(isOk => isOk)
     );
  }

  init22(steps: Step[]): void {
    this.steps22 = steps;
    this.activeStep22 = { ...steps[0], index: 0 };
  }

  onNext22(): void {
    const index = this.activeStep22.index + 1;
    this.activeStep22 = { ...this.steps22[index], index };
  }

  onPrev22(): void {
    const index = this.activeStep22.index - 1;
    this.activeStep22 = { ...this.steps22[index], index };
  }
}

/* personal.component.ts     this.stepperSer[type].next(this.form33.valid);
                                                          true / false

if form is valid then return "true"

 filter(isOk => isOk)  means   filter(true => true)  then the call goes further
 but

 if form is valid then return "false"
 filter(isOk => isOk)  means   filter(false => false)  then the call not goes further

see in  video he also explains their
 */
