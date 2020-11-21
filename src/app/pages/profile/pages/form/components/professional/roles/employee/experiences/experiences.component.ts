import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


export interface ExperienceForm {
  companyName: string;
  period: Period;
}
interface Period {
  from: number;
  to: number;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  @Input() public parent11: FormGroup;
  @Input() public name11 : string;
  @Input() public values11: ExperienceForm [];
  form11: FormArray;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.values11 = this.values11 ? this.values11 : [];
    this.init11();
  }

  ngOnDestroy() {
   this.parent11.removeControl(this.name11);
  }

  private init11(): void {
     this.form11 = this.fb.array( this.getFormGroupArray22(this.values11) );
     this.parent11.addControl(this.name11, this.form11);
  }

  private getFormGroupArray22(values: ExperienceForm[]): FormGroup[] {
     if (!this.values11.length) {
           return [this.getFormGroup()];
     }else {
        return values.map( value => this.getFormGroup(value));
     }
  }

  private getFormGroup( value?: ExperienceForm): FormGroup {
    const group = this.fb.group( {
                              companyName:  [null, {
                                       updateOn: 'blur',
                                       validators: [
                                       Validators.required
                                  ]
                              }],
                              period: [null, {
                                       updateOn: 'change',
                                       validators: [
                                       Validators.required
                                  ]
                              }]
    });
         if(value) {
            group.patchValue(value);
      }
     return group;
   }

   addExperience11(): void {
     this.form11.push(this.getFormGroup());
   }

   deleteExperience11( i: number): void {
    this.form11.removeAt(i);
   }



}
