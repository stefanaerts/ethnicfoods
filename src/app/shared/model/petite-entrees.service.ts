import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PetiteEntree } from './petite-entree';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class PetiteEntreesService {
petiteentrees$: ListObservable<PetiteEntree[]>;

  constructor(private af: AngularFireOffline ) {
 this.petiteentrees$ = af.database.list(Constants.PETITEENTREE)
   .map(PetiteEntree.fromJsonArray);

  }

  findAllPetiteEntrees(): ListObservable<PetiteEntree[]> {
    return this.petiteentrees$;
 }

}
