import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainViande } from './pain-viande';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class PainViandesService {
painviandes$: ListObservable<PainViande[]>;

constructor(private af: AngularFireOffline ) {
  this.painviandes$ = af.database.list(Constants.PAINVIANDE)
   .map(PainViande.fromJsonArray);

 }

  findAllPainViandes(): ListObservable<PainViande[]> {
    return this.painviandes$;
 }
findPainViandeByKey(painKey: string): ObjectObservable<any> {
    return this.af.database.object(Constants.PAINVIANDE +`/${painKey}`).map(json => PainViande.fromJson(json)).first();
  }
}
