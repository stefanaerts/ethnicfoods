import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainVegetarien } from './pain-vegetarien';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class PainVegetariensService {
  // courses$:Observable<Course[]>;
 painvegetariens$: ListObservable<PainVegetarien[]>;


 constructor(private af: AngularFireOffline) {
   this.painvegetariens$ = af.database.list(Constants.PAINVEGETARIEN)
   .map(PainVegetarien.fromJsonArray);

  }
  findAllPainVegetariens(): ListObservable<PainVegetarien[]> {
    return this.painvegetariens$;
  }

  findPainVegetarienByKey(painKey: string): ObjectObservable<PainVegetarien> {
    return this.af.database.object(Constants.PAINVEGETARIEN +`/${painKey}`).map(json => PainVegetarien.fromJson(json)).first();
 //   return this.painvegetariens$.mergeMap(x => x).filter(painveg => painveg.$key === painKey);

}
}
