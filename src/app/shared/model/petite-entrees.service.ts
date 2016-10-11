import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PetiteEntree } from './petite-entree';
import { AngularFire } from 'angularfire2';

@Injectable()
export class PetiteEntreesService {

  constructor(private af: AngularFire ) { }

  findAllPetiteEntrees(): Observable<PetiteEntree[]> {
    return this.af.database.list('Petites_entrées_&_potages');
 }

}
