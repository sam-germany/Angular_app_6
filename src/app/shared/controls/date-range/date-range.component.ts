import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface Value33 {
  from: number;
  to: number;
}

export interface Placeholder33 {
  from33: string;
  to33: string;
}

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder22: Placeholder33;
  @Output() changed22 = new EventEmitter<Value33>();
  form22: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form22 = this.fb.group({
      from: [null],
      to: [null],
    });
  }

  get min(): Date {
    const from = this.form22.controls.from.value;
    return from ? new Date(from) : null;
  }

  get max(): Date {
    const to = this.form22.controls.to.value;
    return to ? new Date(to) : null;
  }

  private propagateChange: any = () => { };
  private propagateTouched: any = () => { };

  writeValue(value: Value33): void {
    this.form22.patchValue(value || {});
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form22.disable();
    } else {
      this.form22.enable();
    }
  }

  onChanged22(): void {
    const value = { ...this.form22.value };

    this.propagateChange(value);
    this.changed22.emit(value);
  }

  onClosed22(): void {
    this.propagateTouched();
  }

}
