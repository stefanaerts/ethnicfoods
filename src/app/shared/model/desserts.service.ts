import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dessert } from './dessert';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class DessertsService {

 desserts$: ListObservable<Dessert[]>;

  constructor(private af: AngularFireOffline ) {
 this.desserts$ = af.database.list(Constants.DESSERTS)
   .map(Dessert.fromJsonArray);

   }

  findAllDesserts(): ListObservable<Dessert[]> {
    return this.desserts$;
 }

}
