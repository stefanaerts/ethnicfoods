import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  desserts$: FirebaseListObservable<any>;
  dessert$: FirebaseObjectObservable<any>;
  private afl: AngularFire;
  lastDessert: any ;

  constructor(private af: AngularFire) {
    this.afl = af;
    this.desserts$ = af.database.list('desserts');
    this.desserts$.subscribe(console.log);

    this.desserts$.map(desserts => desserts[desserts.length - 1]).subscribe(dessert => this.lastDessert = dessert);

    //this.dessert$ = af.database.object(dessert);
    //('desserts/-KTKVTb6-1BWD6vPyoFO');
  }

  listPush() {
    this.desserts$.push({ "name": "Tarte aux pommes,noix et raisins" }).then(() => console.log('Push of dessert done'), console.error);
  }

  listRemove() {
    this.desserts$.remove(this.lastDessert);
  }

  listUpdate() {

    this.desserts$.update(this.lastDessert, { name: "jhon doe" });
  }

  objUpdate() {

    this.dessert$ = this.afl.database.object('desserts/' + this.lastDessert.$key);
    this.dessert$.subscribe();

   this.dessert$.update({ name: 'new nameUpdate' });
  }
  objSet() {

    this.dessert$ = this.afl.database.object('desserts/' + this.lastDessert.$key);
    this.dessert$.subscribe();

   this.dessert$.set({ name: 'new nameSet' });
  }
  objRemove() {

    this.dessert$ = this.afl.database.object('desserts/' + this.lastDessert.$key);
    this.dessert$.subscribe();

    this.dessert$.remove();
  }
}
