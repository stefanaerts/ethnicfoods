import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PainVolaille } from './pain-volaille';
import { AngularFire } from 'angularfire2';
import {
  AngularFireOffline,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';

@Injectable()
export class PainVolaillesService {
painvolailles$: ListObservable<PainVolaille[]>;


  constructor(private af: AngularFireOffline ) {
 this.painvolailles$ = af.database.list(Constants.PAINVOLAILLE)
   .map(PainVolaille.fromJsonArray);


  }

  findAllPainVolailles(): ListObservable<PainVolaille[]> {
    return this.painvolailles$;
 }
  findPainVolaillesByKey(painKey: string): ObjectObservable<any> {
    return this.af.database.object(Constants.PAINVOLAILLE + `/${painKey}`).map(json => PainVolaille.fromJson(json)).first();
  }

}
