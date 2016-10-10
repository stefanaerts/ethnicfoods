import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFire } from 'angularfire2';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdCard, MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";
import 'rxjs/add/operator/map';



// @Component({
//   selector: 'settings-dialog',
//   template: `
//    <label> Would you like more pictures?</label>
//    <md-slide-toggle></md-slide-toggle>
//  `
// })
// export class SettingsDialog{

//   constructor() { }
//   }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isDarkTheme=false;
  // currentDog= {};
  // dogs = [
  //  {rows: 2, name: "Mal", human: "Jeremy", age: 5},
  //   {rows: 1, name: "Molly", human: "David", age: 5},
  //   { rows: 1, name: "Sophie", human: "Alex", age: 8},
  //   {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
  //   { rows: 1, name: "Kobe", human: "Igor", age: 5},
  //   {rows: 2, name: "Porter", human: "Kara", age: 3},
  //   { rows: 1, name: "Stephen", human: "Stephen", age: 8},
  //   {rows: 1, name: "Cinny", human: "Jules", age: 3},
  //   { rows: 1, name: "Hermes", human: "Kara", age: 3},
  // ];

//constructor(public dialog: MdDialog , public vcr: ViewContainerRef ){
//}
//@ViewChild('sidenav') sidenav: MdSidenav;


/*  title = 'app works!';

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
  */
}
