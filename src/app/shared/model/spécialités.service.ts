import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Specialite } from './specialite';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SpécialitésService {
specialites$: Observable<Specialite[]>;



 constructor(private af: AngularFire ) {
    this.specialites$ = af.database.list(Constants.SPECIALITES)
   .map(Specialite.fromJsonArray);
 }

  findAllSpécialités(): Observable<Specialite[]> {
    return this.specialites$;
 }

}
