import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Salade } from './salade';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';


@Injectable()
export class SaladesService {
salades$: ListObservable<Salade[]>;


  constructor(private af: AngularFireOffline ) {
 this.salades$ = af.database.list(Constants.SALADES)
   .map(Salade.fromJsonArray);

  }

  findAllSalades(): ListObservable<Salade[]> {
    return this.salades$;
 }

}
