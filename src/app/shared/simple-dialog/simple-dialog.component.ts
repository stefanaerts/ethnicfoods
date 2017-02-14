import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.css']
})
export class SimpleDialogComponent implements OnInit {

oldDate: Date;
newDate: Date;
  constructor(public dialogRef: MdDialogRef<SimpleDialogComponent>) {
  }

  ngOnInit() {
  }

}
