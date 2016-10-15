import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainVegetarien } from './pain_vegetarien';
import { AngularFire } from 'angularfire2';

@Injectable()
export class VegetariensService {
 // obs$: Observable<any>;
  constructor(private af: AngularFire) { }

  findAllPainVegetariens(): Observable<PainVegetarien[]> {
    return this.af.database.list('Pain_Végétariens');
  }

  findPainVegetarienByKey(painKey: string): Observable<any> {
   // console.log("key=" + painKey);

    //    return this.af.database.object('Pain_Végétariens/' + painKey).map(json => PainVegetarien.fromJson(json)).first();
    return this.af.database.object(`Pain_Végétariens/${painKey}`).map(json => PainVegetarien.fromJson(json)).first();
    //this.obs$.subscribe(something => console.log(something));
//    return something;
  }
}
