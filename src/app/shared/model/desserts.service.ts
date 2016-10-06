import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dessert } from './dessert';
import { AngularFire } from 'angularfire2';
@Injectable()
export class DessertsService {

  constructor(private af: AngularFire ) { }

  findAllDesserts(): Observable<Dessert[]> {
    return this.af.database.list('desserts');
 }

}
