import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PlatDuJour } from './plat-du-jour';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PlatDuJourService {
plat_du_jours$: Observable<PlatDuJour[]>;



 constructor(private af: AngularFire ) {
  this.plat_du_jours$ = af.database.list(Constants.PLATDUJOUR)
   .map(PlatDuJour.fromJsonArray);
  }

  findAllPlatDuJours(): Observable<PlatDuJour[]> {
    return this.plat_du_jours$;
 }

}
