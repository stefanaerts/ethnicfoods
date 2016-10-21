import { Constants } from './shared/constants';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFire } from 'angularfire2';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
//import { MdList,MdListItem,MdListDivider,MdListAvatar, MdCard, MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";


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
  constructor(constants: Constants){

  }

}
