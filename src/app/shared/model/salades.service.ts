import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Salade } from './salade';
import { AngularFire } from 'angularfire2';


@Injectable()
export class SaladesService {
salades$: Observable<Salade[]>;


  constructor(private af: AngularFire ) {
 this.salades$ = af.database.list(Constants.SALADES)
   .map(Salade.fromJsonArray);

  }

  findAllSalades(): Observable<Salade[]> {
    return this.salades$;
 }

}
