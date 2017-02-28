import { SimpleDialogComponent } from './../shared/simple-dialog/simple-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-betaal-menu',
  templateUrl: './betaal-menu.component.html',
  styleUrls: ['./betaal-menu.component.scss']
})
export class BetaalMenuComponent implements OnInit {
  noWifi: boolean;
  constructor(private router: Router, public dialog: MdDialog) { }

  ngOnInit() {
    if (!navigator.onLine) {
      this.noWifi = true;
      alert('no internet connection');
      let link = ['/order'];
    this.router.navigate(link);
    }
    if (navigator.onLine) {
      this.noWifi = false;
    }
  }
  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  goToPayPal() {
    try {
      let link = ['/pp'];
      this.router.navigate(link);
    } catch (error) {
      alert('something went wrong.See message:-> ' + error);
      window.location.href = '/home';
    }


  }
  //openDialog() {
  //    let dialogRef: MdDialogRef <SimpleDialogComponent> = this.dialog.open(SimpleDialogComponent);
  //    dialogRef.componentInstance.variableMessage = 'No internet connection at this moment,pls wait to be connected or connect again';
  //  }

  goToCheckout() {
    let link = ['/checkout'];
    this.router.navigate(link);
  }
  goToCcPicker() {
    let link = ['/ccpick'];
    this.router.navigate(link);
  }
}
