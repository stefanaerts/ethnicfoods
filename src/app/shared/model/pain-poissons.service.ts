import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainPoisson } from './pain-poisson';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class PainPoissonsService {
painpoissons$: ListObservable<PainPoisson[]>;


  constructor(private af: AngularFireOffline ) {
     this.painpoissons$ = af.database.list(Constants.PAINPOISSON)
   .map(PainPoisson.fromJsonArray);

   }

  findAllPain_Poissons(): ListObservable<PainPoisson[]> {
    return this.painpoissons$;
 }
findPainPoissonByKey(painKey: string): ObjectObservable<any> {
    return this.af.database.object(Constants.PAINPOISSON + `/${painKey}`).map(json => PainPoisson.fromJson(json)).first();
 //     return this.painpoissons$.mergeMap(x => x).filter(painpoisson => painpoisson.$key === painKey);
  }
}
