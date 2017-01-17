import { Constants } from './../constants';
import { AngularFire } from 'angularfire2';
import { Drink } from './drink';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DrinksService {

  drinks$: Observable<Drink[]>;

  constructor(private af: AngularFire) {
    this.drinks$ = af.database.list(Constants.DRINKS)
      .map(Drink.fromJsonArray);
  }

  findAllDrinks(): Observable<Drink[]> {
    return this.drinks$;
  }
}
