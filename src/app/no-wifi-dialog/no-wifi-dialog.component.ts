import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-no-wifi-dialog',
  templateUrl: './no-wifi-dialog.component.html',
  styleUrls: ['./no-wifi-dialog.component.css']
})
export class NoWifiDialogComponent implements OnInit {

   constructor(public dialogRef: MdDialogRef<any>, public router: Router) { }

  ngOnInit() {
  }
close(){
  this.dialogRef.close();
    let link = ['/home'];
    this.router.navigate(link);
  }
}
