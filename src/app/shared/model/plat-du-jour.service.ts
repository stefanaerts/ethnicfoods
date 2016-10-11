import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PlatDuJour } from './plat-du-jour';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PlatDuJourService {

 constructor(private af: AngularFire ) { }

  findAllPlatDuJours(): Observable<PlatDuJour[]> {
    return this.af.database.list('Plat_du_jour');
 }

}
