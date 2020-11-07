import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

type Value = number;


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder22: string;
  @Input() min22: Date;
  @Input() max22: Date;
  @Output() changed22 = new EventEmitter<Value>();
  @Output() closed22 = new EventEmitter<void>();

  value22: Value;
  isDisabled22: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  get inputValue22(): Date {
    return this.value22 ? new Date(this.value22) : null;
  }

  private propagateChange: any = () => { };
  private propagateTouched: any = () => { };

  writeValue(value: Value): void {
    this.value22 = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled22 = isDisabled;
  }

  onChanged22(event: MatDatepickerInputEvent<Date>): void {
    const value = event.value ? event.value.getTime() : null;

    this.value22 = value;
    this.propagateChange(value);
    this.changed22.emit(value);
  }

  onClosed22(): void {
    this.propagateTouched();
    this.closed22.emit();
  }

}
