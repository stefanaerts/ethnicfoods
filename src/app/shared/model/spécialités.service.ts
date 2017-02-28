import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Specialite } from './specialite';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class SpécialitésService {
specialites$: ListObservable<Specialite[]>;



 constructor(private af: AngularFireOffline ) {
    this.specialites$ = af.database.list(Constants.SPECIALITES)
   .map(Specialite.fromJsonArray);
 }

  findAllSpécialités(): ListObservable<Specialite[]> {
    return this.specialites$;
 }

}
