import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  color22: ThemePalette = 'primary';
  mode22: ProgressSpinnerMode = 'indeterminate';


  constructor() { }
  ngOnInit(): void {}

}
