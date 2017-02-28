import { OrderService } from './../shared/model/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-dialog-pay-succeeded',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
//param1: string;
totalPay:string;
  constructor(public dialogRef: MdDialogRef<any>, public router: Router,public orderServ: OrderService) {
   }

ngOnInit(){
  this.totalPay = this.getUrlParameter('am');
}
getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
close(){
  this.dialogRef.close();
    let link = ['/home'];
    this.router.navigate(link);
  }

}
