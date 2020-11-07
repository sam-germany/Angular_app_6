import {Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {ControlItem, Value} from '@app/models/frontend';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, startWith, takeUntil, tap} from 'rxjs/operators';
export {ControlItem, Value} from '@app/models/frontend';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements OnInit , OnDestroy, ControlValueAccessor{

  @Input() items22: ControlItem[];
  @Input() placeholder22: string;
  @Output() changed22 = new EventEmitter<Value>();

  formControl22 = new FormControl();
  options$: Observable<ControlItem[]>;

  private destory22 = new Subject<any>();
  constructor() { }

  ngOnInit(): void {
       this.options$ = this.formControl22.valueChanges.pipe(
         startWith(''),
         filter(value => typeof  value === 'string' || typeof  value === 'object'),
         map(value => typeof value === 'string' ? value : value.label),
         map(label => label ? this.filter33(label) : this.items22.slice())
       );

        this.formControl22.valueChanges.pipe(
                                    takeUntil(this.destory22),
                                    distinctUntilChanged(),
                                           ).subscribe( item => {
                                                          const value33 = typeof item === 'object' ? item.value : null;
                                                          this.propagateChange(value33);
                                                          this.changed22.emit(value33);
                                            });
  }
  ngOnDestroy(): void {
    this.destory22.next();
    this.destory22.complete();
  }

  private filter33(value: string): ControlItem[] {
           const filterValue = value.toLowerCase();
    return this.items22.filter(item => item.label.toLowerCase().includes(filterValue));
  }

  private propagateChange: any = () => { };
  private propagateTouched: any = () => { };


  writeValue(value: Value): void {
    const selectedOption22 = this.items22.find(item => item.value === value);
     this.formControl22.setValue(selectedOption22);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled) {
      this.formControl22.disable();
    }else {
      this.formControl22.enable();
    }
  }

  displayFn22(item?: ControlItem): string | undefined {
    return item ? item.label : undefined;
  }

  onBlur22(): void {
    this.propagateTouched();
  }




}
