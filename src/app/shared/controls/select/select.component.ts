import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ControlItem , Value} from '@app/models/frontend';
import {MatSelectChange} from '@angular/material/select';
export {ControlItem , Value} from '@app/models/frontend';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() items22: ControlItem[];
  @Input() placeholder22: string;
  @Output() changed22 = new EventEmitter<Value>();

  value22: Value;
  isDisabled22: boolean;

  constructor() { }

  ngOnInit(): void {
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

  onChanged22(event: MatSelectChange): void {
    const value = event.value ? event.value : null;

    this.value22 = value;
    this.propagateChange(value);
    this.changed22.emit(value);
  }

  onBlur22(): void {
    this.propagateTouched();
  }

}
