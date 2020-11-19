import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Dictionaries} from '@app/store/dictionaries';

export interface RecruiterForm {
  companyName: string;
  employeesCount: number;
}

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit {

  @Input() parent44: FormGroup;
  @Input() name44: string;

  @Input() value44: RecruiterForm;
  @Input() dictionaries44: Dictionaries;

  form44: FormGroup;



  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form44 = this.fb.group({
                      companyName: [null, {
                               updateOn: 'blur',
                               validators: [
                                 Validators.required
                               ]
                      }],
                      employeesCount: [null, {
                                updateOn: 'blur',
                                validators: [
                                  Validators.required
                                ]
                      }]
    });

    if(this.value44) {
      this.form44.patchValue(this.value44);
    }

    this.parent44.addControl(this.name44, this.form44);
  }

  ngOnDestroy(): void {
    this.parent44.removeControl(this.name44);
  }
}
