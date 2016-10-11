import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Formule } from './formule';
import { AngularFire } from 'angularfire2';

@Injectable()
export class FormulesService {

  constructor(private af: AngularFire ) { }

  findAllFormules(): Observable<Formule[]> {
    return this.af.database.list('Formules');
 }

}
