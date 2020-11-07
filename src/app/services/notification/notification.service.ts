import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from './components';

@Injectable()
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  error(message22: string): void {
     this.snackBar.openFromComponent(NotificationComponent, {
       duration: 3000,
       data: { message22 },
       panelClass: [ 'mat-snackbar_error']
     });
  }

  success(message22: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { message22 },
      panelClass: [ 'mat-snackbar_success']
    });
  }
}
