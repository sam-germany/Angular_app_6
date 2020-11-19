import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Dictionaries} from '@app/store/dictionaries';

export interface EmployeeForm {
  specialization: string;
  skills: string[];
  qualification: string;
  expectedSalary: number;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy{


  @Input() parent55: FormGroup;
  @Input() name55: string;

  @Input() value55: EmployeeForm;
  @Input() dictionaries55: Dictionaries;

   form55: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form55 = this.fb.group({
                    expectedSalary:  [null, {
                               updateOn: 'blur',
                               validators: [
                                 Validators.required
                               ]
                    }],
                    specialization: [null, {
                               updateOn: 'change',
                               validators: [
                                 Validators.required
                               ]
                    }],
                    qualification: [null, {
                               updateOn: 'change',
                               validators: [
                                 Validators.required
                               ]
                    }],
                    skills: [null, {
                               updateOn: 'change',
                               validators: [
                                  Validators.required
                               ]
                    }]
    })

    if(this.value55) {
      this.form55.patchValue(this.value55);
    }

    this.parent55.addControl(this.name55, this.form55);
  }


  ngOnDestroy(): void {
    this.parent55.removeControl(this.name55);

  }

}
