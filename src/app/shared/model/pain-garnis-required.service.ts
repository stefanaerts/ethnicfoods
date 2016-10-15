import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GarnisRequired } from './garnis-required';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PainGarnisRequiredService {

 constructor(private af: AngularFire ) { }

  findAllGarnisRequired(): Observable<GarnisRequired[]> {
    return this.af.database.list('Pains_garnis_required');
 }
}
