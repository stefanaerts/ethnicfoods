import { Constants } from './shared/constants';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';


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


    this.snb.refreshTotalPrizeSnackbar();

}

}
