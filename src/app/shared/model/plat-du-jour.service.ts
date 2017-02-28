import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PlatDuJour } from './plat-du-jour';
//import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class PlatDuJourService {
plat_du_jours$: ListObservable<PlatDuJour[]>;



 constructor(private af: AngularFireOffline ) {
  this.plat_du_jours$ = af.database.list(Constants.PLATDUJOUR)
   .map(PlatDuJour.fromJsonArray);
  }

  findAllPlatDuJours(): ListObservable<PlatDuJour[]> {
    return this.plat_du_jours$;
 }

}
