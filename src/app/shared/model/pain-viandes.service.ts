import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainViande } from './pain-viande';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PainViandesService {
painviandes$: Observable<PainViande[]>;

constructor(private af: AngularFire ) {
  this.painviandes$ = af.database.list(Constants.PAINVIANDE)
   .map(PainViande.fromJsonArray);

 }

  findAllPainViandes(): Observable<PainViande[]> {
    return this.painviandes$;
 }
findPainViandeByKey(painKey: string): Observable<any> {
    return this.af.database.object(Constants.PAINVIANDE +`/${painKey}`).map(json => PainViande.fromJson(json)).first();
  }
}
