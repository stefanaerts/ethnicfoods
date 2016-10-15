import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GarnisOption } from './garnis-option';
import { AngularFire } from 'angularfire2';


@Injectable()
export class PainGarnisOptionsService {

  constructor(private af: AngularFire ) { }

  findAllGarnisOptions(): Observable<GarnisOption[]> {
    return this.af.database.list('Pains_garnis_options');
 }

}
