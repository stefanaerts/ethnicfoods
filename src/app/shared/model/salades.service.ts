import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Salade } from './salade';
import { AngularFire } from 'angularfire2';


@Injectable()
export class SaladesService {

  constructor(private af: AngularFire ) { }

  findAllSalades(): Observable<Salade[]> {
    return this.af.database.list('salades');
 }

}
