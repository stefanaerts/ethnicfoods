import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dessert } from './dessert';
import { AngularFire } from 'angularfire2';
@Injectable()
export class DessertsService {

 desserts$: Observable<Dessert[]>;

  constructor(private af: AngularFire ) {
 this.desserts$ = af.database.list(Constants.DESSERTS)
   .map(Dessert.fromJsonArray);

   }

  findAllDesserts(): Observable<Dessert[]> {
    return this.desserts$;
 }

}
