import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainGarnisOption } from './pain-garnis-option';
import { AngularFire } from 'angularfire2';


@Injectable()
export class PainGarnisOptionsService {
  paingarnisoptions$: Observable<PainGarnisOption[]>;

  constructor(private af: AngularFire ) {
      this.paingarnisoptions$ = af.database.list(Constants.PAINGARNISOPTIONS)
   .map(PainGarnisOption.fromJsonArray);
  }

  findAllGarnisOptions(): Observable<PainGarnisOption[]> {
    return this.paingarnisoptions$;
 }

}
