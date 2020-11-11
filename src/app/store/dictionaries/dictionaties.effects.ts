import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import  { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable, of, zip} from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import  { Dictionaries, Dictionary, Item, ControlItem } from './dictionaties.models';


type Action22 = fromActions.All;
