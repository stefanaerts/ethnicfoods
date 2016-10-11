import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainPoisson } from './pain_poisson';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PoissonsService {

  constructor(private af: AngularFire ) { }

  findAllPain_Poissons(): Observable<PainPoisson[]> {
    return this.af.database.list('Pain_Poissons');
 }

}
