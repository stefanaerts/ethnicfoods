import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainPoisson } from './pain-poisson';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PainPoissonsService {
painpoissons$: Observable<PainPoisson[]>;


  constructor(private af: AngularFire ) {
     this.painpoissons$ = af.database.list(Constants.PAINPOISSON)
   .map(PainPoisson.fromJsonArray);

   }

  findAllPain_Poissons(): Observable<PainPoisson[]> {
    return this.painpoissons$;
 }
findPainPoissonByKey(painKey: string): Observable<any> {
    return this.af.database.object(Constants.PAINPOISSON + `/${painKey}`).map(json => PainPoisson.fromJson(json)).first();
 //     return this.painpoissons$.mergeMap(x => x).filter(painpoisson => painpoisson.$key === painKey);
  }
}
