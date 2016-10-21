import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainVegetarien } from './pain-vegetarien';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PainVegetariensService {
  // courses$:Observable<Course[]>;
 painvegetariens$: Observable<PainVegetarien[]>;


 constructor(private af: AngularFire) {
   this.painvegetariens$ = af.database.list(Constants.PAINVEGETARIEN)
   .map(PainVegetarien.fromJsonArray);

  }
  findAllPainVegetariens(): Observable<PainVegetarien[]> {
    return this.painvegetariens$;
  }

  findPainVegetarienByKey(painKey: string): Observable<PainVegetarien> {
    return this.af.database.object(Constants.PAINVEGETARIEN +`/${painKey}`).map(json => PainVegetarien.fromJson(json)).first();
 //   return this.painvegetariens$.mergeMap(x => x).filter(painveg => painveg.$key === painKey);

}
}
