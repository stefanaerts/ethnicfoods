import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Formule } from './formule';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class FormulesService {

formules$: ListObservable<Formule[]>;

  constructor(private af: AngularFireOffline ) {
      this.formules$ = af.database.list(Constants.FORMULES)
   .map(Formule.fromJsonArray);

   }

  findAllFormules(): ObjectObservable<Formule[]> {
    return this.formules$;
 }

}
