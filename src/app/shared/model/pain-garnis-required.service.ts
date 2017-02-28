import { Constants } from './../constants';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { PainGarnisRequired } from './pain-garnis-required';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class PainGarnisRequiredService {

paingarnisrequired$: ListObservable<PainGarnisRequired[]>;
 constructor(private af: AngularFireOffline ) {
this.paingarnisrequired$ = af.database.list(Constants.PAINGARNISREQUIREMENTS)
   .map(PainGarnisRequired.fromJsonArray);
  }

  findAllGarnisRequired(): ListObservable<PainGarnisRequired[]> {
    return this.paingarnisrequired$;
 }
}
