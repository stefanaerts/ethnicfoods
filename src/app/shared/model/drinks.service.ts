import { Constants } from './../constants';
import { AngularFire } from 'angularfire2';
import { Drink } from './drink';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class DrinksService {

  drinks$: ListObservable<Drink[]>;

  constructor(private af: AngularFireOffline) {
    this.drinks$ = af.database.list(Constants.DRINKS)
      .map(Drink.fromJsonArray);
  }

  findAllDrinks(): ListObservable<Drink[]> {
    return this.drinks$;
  }
}
