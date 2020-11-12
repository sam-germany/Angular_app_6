import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import  { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable, of, zip} from 'rxjs';
import {map, switchMap, catchError, take, tap} from 'rxjs/operators';
import  { Dictionaries, Dictionary, Item, ControlItem } from './dictionaties.models';
import * as fromActions from'./dictionaties.actions';
import * as jsonCountries from '@src/asserts/images/countries.json';



type Action22 = fromActions.All22;

const documentToItem = (x: DocumentChangeAction<any>): Item =>  {
                                                            const data = x.payload.doc.data();
                                                            return {
                                                                 id: x.payload.doc.id,
                                                                 ...data
                                                            };
                                                         };
const itemToControlItem = (x: Item): ControlItem => ({
                                                      value: x.id,
                                                      label: x.name,
                                                      icon: x.icon
                                               });
const addDictionary = (items: Item[]): Dictionary => ({
                                                        items,
                                                        controlItems: [...items].map(x => itemToControlItem(x))
                                                   }
                                              );
@Injectable()
export class DictionariesEffects {

  constructor( private actions: Actions, private afs: AngularFirestore ) { }

  @Effect()
  read: Observable<Action22> = this.actions.pipe(
                                               ofType(fromActions.Types.READ),
                                               switchMap(() => {
                                                                    return zip(
                                                                             this.afs.collection('roles')
                                                                                     .snapshotChanges()
                                                                                     .pipe(  take(1),
                                                                                              map(items => items.map(x =>  documentToItem(x)))
                                                                                       ),
                                                                             this.afs.collection('specializations')
                                                                                     .snapshotChanges()
                                                                                     .pipe(  take(1),
                                                                                              map(items => items.map(x => documentToItem(x)))
                                                                                       ),
                                                                             this.afs.collection('qualifications')
                                                                                     .snapshotChanges()
                                                                                     .pipe(  take(1),
                                                                                              map(items => items.map(x => documentToItem(x)))
                                                                                       ),
                                                                             this.afs.collection('skills')
                                                                                     .snapshotChanges()
                                                                                     .pipe(  take(1),
                                                                                              map(items => items.map(x => documentToItem(x)))
                                                                                       ),
                                                                             of((jsonCountries as any).default.map(country => ({
                                                                                   id: country.code.toUpperCase(),
                                                                                   name: country.name,
                                                                                   icon: {
                                                                                          src: null,
                                                                                          cssClass: 'fflag fflag-' + country.code.toUpperCase()
                                                                                        }
                                                                               })

                                                                             )),
                                                                           ).pipe(
                                                                                 map(([roles, specializations, qualifications,  skills, countries]) => {
                                                                                          const dictionaries77: Dictionaries = {
                                                                                            roles: addDictionary(roles),
                                                                                            specializations: addDictionary(specializations),
                                                                                            qualifications: addDictionary(qualifications),
                                                                                            skills: addDictionary(skills),
                                                                                            countries: addDictionary(countries)
                                                                                          };
                                                                                          return new fromActions.ReadSuccess(dictionaries77)
                                                                                  }),
                                                                           catchError( err => of( new fromActions.ReadError(err.message)))
                                                                                 );
                                               })
  );

}
