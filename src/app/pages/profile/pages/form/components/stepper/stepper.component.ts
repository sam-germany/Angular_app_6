import { Component, OnInit } from '@angular/core';
import {StepperService} from './services';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {


  private destroy = new Subject<any>();

  constructor(private stepperSer: StepperService) { }

  ngOnInit(): void {
    this.stepperSer.next$.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.stepperSer.onNext22();
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
  get steps33() {
    return this.stepperSer.steps22;
  }
  get activeStep() {
    return this.stepperSer.activeStep22;
  }
  isActive(index: number): boolean {
    return index === this.activeStep.index;
  }
  isCompleted(index: number): boolean {
    return index < this.activeStep.index;
  }
  isFirst(): boolean {
    return this.activeStep.index === 0;
  }
  isLast(): boolean {
    return this.activeStep.index === this.steps33.length - 1;
  }
  onNext33() {
    this.stepperSer.check.next('next');
  }
  onComplete33() {
    this.stepperSer.check.next('complete');
  }
  onPrev33() {
    this.stepperSer.onPrev22();
  }
  onCancel33() {
    this.stepperSer.cancel.next();
  }
}
