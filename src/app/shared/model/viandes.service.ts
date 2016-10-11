import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainViandes } from './pain_viandes';
import { AngularFire } from 'angularfire2'

@Injectable()
export class ViandesService {
constructor(private af: AngularFire ) { }

  findAllPainViandes(): Observable<PainViandes[]> {
    return this.af.database.list('Pain_Viandes');
 }

}
