import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { regex, regexErrors, markFormGroupTouched22 } from '@app/shared';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  regexErrors22 = regexErrors;
  loading$: Observable<boolean>;

  constructor( private fb: FormBuilder,
               private store: Store<fromRoot.State>
               ) { }

  ngOnInit(): void {

    this.loading$= this.store.pipe(select(fromUser.getLoading));

    this.form = this.fb.group({
                                       email: [null, {
                                                   updateOn: 'blur',
                                                   validators: [
                                                            Validators.required,
                                                            Validators.maxLength(128),
                                                            Validators.pattern(regex.email)
                                                   ]
                                       }],
                                       password: [null, {
                                                   updateOn: 'blur',
                                                   validators: [
                                                            Validators.required,
                                                            Validators.minLength(6),
                                                            Validators.maxLength(30),
                                                            Validators.pattern(regex.password)
                                                   ]
                                       }],
                                       passwordRepeat: [null, {
                                                   updateOn: 'blur',
                                                   validators: [
                                                            Validators.required,
                                                            Validators.minLength(6),
                                                            Validators.maxLength(30),
                                                            Validators.pattern(regex.password)
                                                   ]
                                       }]
    }, {validator: this.repeatPasswordValidator22});
  }



  private repeatPasswordValidator22(group: FormGroup): { [key: string]: boolean} {

         const password = group.get('password');
         const passwordRepeat = group.get('passwordRepeat');

      const x =  passwordRepeat.value && password.value !== passwordRepeat.value  ? { repeat22 : true } : null ;
console.log(x);
     return x;

     // it return either
    //  "repeat: true"     <-- means both passwords does not match
    // or   "null"         <-- means both passwords are matched
  }


  onSubmit22(): void {
     if (this.form.valid) {

          const value = this.form.value;
          const credentials: fromUser.EmailPasswordCredentials = {
              email: value.email,
              password: value.password
          };

          this.store.dispatch(new fromUser.SignUpEmail(credentials));

     } else {
       markFormGroupTouched22(this.form);
     }
  }



}

























