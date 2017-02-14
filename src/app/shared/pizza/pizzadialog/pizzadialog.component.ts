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

  totalPrize: string;
  constructor(public os: OrderService, public router: Router) {
  }

  ngOnInit() {
    this.totalPrize = this.os.getTotalPrizeAsString();
  }
  goToOrder() {
    let link = ['/pickupOrDeliveryMenu'];
    this.router.navigate(link);
  }

}


