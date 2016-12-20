import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-dialog-pay-succeeded',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
//param1: string;
  constructor(public dialogRef: MdDialogRef<any>, public router: Router) { }

close(){
  this.dialogRef.close();
    let link = ['/home'];
    this.router.navigate(link);
  }

}
