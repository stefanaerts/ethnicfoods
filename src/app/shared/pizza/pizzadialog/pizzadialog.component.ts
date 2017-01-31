import { Router } from '@angular/router';
import { OrderService } from './../../model/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'pizza-dialog',
  templateUrl: './pizzadialog.component.html',
  styleUrls: ['./pizzadialog.component.scss'],
  providers: []
})
export class PizzadialogComponent implements OnInit {


  constructor(public os: OrderService, public router: Router) {
   }

  ngOnInit() {

  }
  goToOrder(){
let link=['/pickupOrDeliveryMenu'];
this.router.navigate(link);
  }

}


