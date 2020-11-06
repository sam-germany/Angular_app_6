import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {regex, regexErrors} from '@app/shared';
import {ControlItem} from '@app/models/frontend';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form22: FormGroup;
  isInline22: boolean;
  regexErrors = regexErrors;
  items22: ControlItem[];


  constructor(private fb: FormBuilder) {
    this.isInline22 = true;
    this.items22 = [
      {label: 'First', value: 1},
      {label: 'Second', value: 2},
      {label: 'Third', value: 3},
      {label: 'Fourth', value: 4},
      {label: 'Fifth', value: 5}
    ];
  }

  ngOnInit(): void {
                this.form22 = this.fb.group({
                   input: [null, {
                              updateOn: 'blur',
                              validators: [
                                      Validators.required,
                                      Validators.minLength(3),
                                      Validators.pattern(regex.email)
                                        ]
                           }],
                   password: [null, {
                              updateOn: 'blur',
                              validators: [
                                      Validators.required
                                        ]
                           }],
                   select: [null, {
                              updateOn: 'change',
                              validators: [
                                      Validators.required
                                       ]
                           }],
                  checkboxes: [null, {
                              updateOn: 'change',
                              validators: [
                                      Validators.required
                                       ]
                           }],
                  radios: [null, {
                              updateOn: 'change',
                              validators: [
                                      Validators.required
                                       ]
                           }],
                  date: [null, {
                              updateOn: 'change',
                              validators: [
                                      Validators.required
                                      ]
                           }],
                  dateRange: [null, {
                              updateOn: 'change',
                              validators: [
                                      Validators.required
                                      ]
                           }],
                  });
  }

  onSubmit22(): void {
    console.log('Submit');
  }

  onPatchValue22(): void {
    this.form22.patchValue({input: 'test'});
  }

  onToggleInline22() {
    this.isInline22 = !this.isInline22;
  }
}
