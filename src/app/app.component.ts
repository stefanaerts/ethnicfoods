import { Constants } from './shared/constants';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import '../js/nofi.js';

declare var NoFi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SnackbarComponent]
})
export class AppComponent implements OnInit{

  constructor(constants: Constants,public snb: SnackbarComponent, public  vc: ViewContainerRef) {

  }

ngOnInit(){
NoFi.init({
  eventName: 'offline',
  interval: 1000,
  exit: true
});

    this.snb.refreshTotalPrizeSnackbar();

}

}
