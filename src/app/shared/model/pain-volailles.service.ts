import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainVolaille } from './pain-volaille';
import { AngularFire } from 'angularfire2'
@Injectable()
export class PainVolaillesService {
painvolailles$: Observable<PainVolaille[]>;


  constructor(private af: AngularFire ) {
 this.painvolailles$ = af.database.list(Constants.PAINVOLAILLE)
   .map(PainVolaille.fromJsonArray);


  }

  findAllPainVolailles(): Observable<PainVolaille[]> {
    return this.painvolailles$;
 }
  findPainVolaillesByKey(painKey: string): Observable<any> {
    return this.af.database.object(Constants.PAINVOLAILLE + `/${painKey}`).map(json => PainVolaille.fromJson(json)).first();
  }

}
