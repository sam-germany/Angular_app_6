import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule} from '@angular/material/core';
import {environment} from '@src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// Services

import {NotificationModule} from '@app/services';

// Store

import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const StoreDevtools = !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50}) : [];
import { reducers, effects } from'./store';


const APP_DATE_FORMATS22: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: {day: 'numeric', month: 'long' ,year: 'numeric'},
    dateA11yLabel: { year: 'numeric', month: 'short', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatNativeDateModule,
    NotificationModule.forRoot(),
    StoreModule.forRoot(reducers, {
                                   runtimeChecks: {
                                     strictStateImmutability: true,
                                     strictActionImmutability: true
                                           }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtools,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS22 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
