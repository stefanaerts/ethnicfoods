import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list-toolbar',
  templateUrl: './order-list-toolbar.component.html',
  styleUrls: ['./order-list-toolbar.component.scss']
})
export class OrderListToolbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  goToCheckout() {
    let link = ['/checkoutMenu'];
    this.router.navigate(link);
  }
  goToInvoice() {
    let link = ['/invoice'];
    this.router.navigate(link);
  }
  goToPickupOrDeliveryMenu(){
       let link = ['/pickupOrDeliveryMenu'];
    this.router.navigate(link);
  }
}
