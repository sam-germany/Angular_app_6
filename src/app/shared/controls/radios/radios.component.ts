import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';

import { ControlItem, Value } from '@app/models/frontend';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
export { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

  @Input() items22: ControlItem[];
  @Output() changed22 = new EventEmitter<Value>();
  value22: Value;
  isDisabled22: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => { };

  writeValue(value: Value): void {
    this.value22 = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled22 = isDisabled;
  }

  onChanged(value: Value): void {
    this.value22 = value;
    this.propagateChange(value);
    this.changed22.emit(value);
  }

  isChecked(value: Value): boolean {
    return this.value22 === value;
  }

}
