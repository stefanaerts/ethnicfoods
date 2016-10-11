import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainVegetarien } from './pain_vegetarien';
import { AngularFire } from 'angularfire2';

@Injectable()
export class VegetariensService {
 constructor(private af: AngularFire ) { }

  findAllPainVegetariens(): Observable<PainVegetarien[]> {
    return this.af.database.list('Pain_Végétariens');
 }


}
