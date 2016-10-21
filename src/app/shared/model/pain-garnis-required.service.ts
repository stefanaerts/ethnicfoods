import { Constants } from './../constants';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { PainGarnisRequired } from './pain-garnis-required';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PainGarnisRequiredService {

paingarnisrequired$: Observable<PainGarnisRequired[]>;
 constructor(private af: AngularFire ) {
this.paingarnisrequired$ = af.database.list(Constants.PAINGARNISREQUIREMENTS)
   .map(PainGarnisRequired.fromJsonArray);
  }

  findAllGarnisRequired(): Observable<PainGarnisRequired[]> {
    return this.paingarnisrequired$;
 }
}
