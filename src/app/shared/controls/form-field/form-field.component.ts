import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() label22: string;
  @Input() required22: boolean;
  @Input() isInline22: boolean;
  @Input() control22: AbstractControl;
  @Input() patternError22: string;

  constructor() {
    this.isInline22 = true;
  }

  ngOnInit(): void {
  }

  hasError22(): boolean {
    return this.control22 && this.control22.invalid && this.control22.touched;
  }

  get errorKey22() {
    return this.control22 && this.control22.errors && Object.keys(this.control22.errors)[0];
  }

}
