import { NoWifiDialogComponent } from './../no-wifi-dialog/no-wifi-dialog.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

const dialogs = [NoWifiDialogComponent];
const dialogsMap = {
  'app-no-wifi-dialog': NoWifiDialogComponent,

}
@Component({
  selector: 'app-confirm-no-wifi-dialog',
  templateUrl: './confirm-no-wifi-dialog.component.html',
  styleUrls: ['./confirm-no-wifi-dialog.component.css']
})
export class ConfirmNoWifiDialogComponent implements OnInit {

  dialogRef: MdDialogRef<any>;

  constructor(
      public dialog: MdDialog,
      public viewContainerRef: ViewContainerRef) { }

  open(key) {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;


    this.dialogRef = this.dialog.open(dialogsMap[key], config);
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

ngOnInit(){
  this.open('app-no-wifi-dialog');
}

}
