import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PetiteEntree } from './petite-entree';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PetiteEntreesService {
petiteentrees$: Observable<PetiteEntree[]>;

  constructor(private af: AngularFire ) {
 this.petiteentrees$ = af.database.list(Constants.PETITEENTREE)
   .map(PetiteEntree.fromJsonArray);

  }

  findAllPetiteEntrees(): Observable<PetiteEntree[]> {
    return this.petiteentrees$;
 }

}
