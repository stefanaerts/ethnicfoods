import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Specialite } from './specialite';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SpécialitésService {

 constructor(private af: AngularFire ) { }

  findAllSpécialités(): Observable<Specialite[]> {
    return this.af.database.list('spécialités');
 }

}
