import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Formule } from './formule';
import { AngularFire } from 'angularfire2';

@Injectable()
export class FormulesService {

formules$: Observable<Formule[]>;

  constructor(private af: AngularFire ) {
      this.formules$ = af.database.list(Constants.FORMULES)
   .map(Formule.fromJsonArray);

   }

  findAllFormules(): Observable<Formule[]> {
    return this.formules$;
 }

}
