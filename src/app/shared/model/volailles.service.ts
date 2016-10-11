import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainVolaille } from './pain_volailles';
import { AngularFire } from 'angularfire2'
@Injectable()
export class VolaillesService {

  constructor(private af: AngularFire ) { }

  findAllPainVolailles(): Observable<PainVolaille[]> {
    return this.af.database.list('Pain_Volailles');
 }

}
