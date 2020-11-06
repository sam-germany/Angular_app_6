import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder22: string;
  @Output() changed22 = new EventEmitter<string>();

  value22: string;
  isDisabled22: boolean;
  passwordType22: PasswordType;

  constructor() {
    this.passwordType22 = 'password';
  }

  ngOnInit(): void {
  }

  private propagateChange: any = () => { };
  private propagateTouched: any = () => { };

  writeValue(value: string): void {
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

  onKeyup22(value: string): void {
    this.value22 = value;
    this.propagateChange(value);
    this.changed22.emit(value);
  }

  onBlur22(): void {
    this.propagateTouched();
  }

  togglePassword22(): void {
    this.passwordType22 = this.passwordType22 === 'password' ? 'text' : 'password';
  }

}
