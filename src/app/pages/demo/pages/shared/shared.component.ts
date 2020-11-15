import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {markFormGroupTouched22, regex, regexErrors} from '@app/shared';
import {ControlItem} from '@app/models/frontend';
import {NotificationService} from '@app/services';

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
  showSpinner22 =  false;

  constructor(private fb: FormBuilder, private notification: NotificationService) {
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
                  autocomplete: [null, {
                              updateOn: 'change',
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

    if(!this.form22.valid) {
      markFormGroupTouched22(this.form22);
    }
  }

  onPatchValue22(): void {
    this.form22.patchValue({
      input: 123,
      password: 'qwerty',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2019, 5, 10).getTime(),
        to: new Date(2019, 5, 25).getTime()
      }
    });
  }

  onToggleInline22(): void {
    this.isInline22 = !this.isInline22;
  }

  onToggleDisable22(): void {
  if ( this.form22.enabled) {
    this.form22.disable();
  } else {
    this.form22.enable();
  }
  }

  onToggleSpinner22(): void {
    this.showSpinner22 = !this.showSpinner22;
  }

  onSuccess22(): void {
    this.notification.success('Everything is fine');
  }

  onError22(): void {
    this.notification.error('Something is wrong');
  }

  onFilesChanged(urls: string | string []): void {
    console.log('urls = ', urls);
  }
}
