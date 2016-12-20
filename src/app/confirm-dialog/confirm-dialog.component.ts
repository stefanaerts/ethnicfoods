import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

const dialogs = [DialogComponent];
const dialogsMap = {
  'app-no-wifi-dialog': DialogComponent,

}
@Component({
  selector: 'app-confirm-dialog',
   template: `
    <div>
      <h2>Payment succeeded</h2>
    </div>
  `,
})
export class ConfirmDialogComponent implements OnInit{
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
